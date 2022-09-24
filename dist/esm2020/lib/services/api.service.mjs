import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { take, takeWhile, finalize } from 'rxjs/operators';
import _ from 'lodash';
import { StorageService } from './storage.service';
import { SERVER_CONFIG, ServerConfig, STORAGE_CONFIG, StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
import * as i3 from "../injection-token";
export class ApiService {
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {StorageConfig} storageConfig
     * @param {HttpClient} _http
     * @param {StorageService} _storageService
     */
    constructor(serverConfig, storageConfig, _http, _storageService) {
        this.serverConfig = serverConfig;
        this.storageConfig = storageConfig;
        this._http = _http;
        this._storageService = _storageService;
        this.errorCatcher$ = new Subject();
        this._baseURL = this.serverConfig.apiURL;
        this._caching = {};
        this._forceReloadDelayTime = 60000;
        this._forceReloadDebounce = _.debounce(this.clearCache.bind(this), this._forceReloadDelayTime);
    }
    /**
     * @param {string} url
     * @return {void}
     */
    setBaseURL(url) {
        this._baseURL = url;
    }
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }
    /**
     * @param {number} forceReloadDelayTime
     * @return {void}
     */
    setForceReloadDelayTime(forceReloadDelayTime) {
        this._forceReloadDebounce?.cancel();
        this._forceReloadDelayTime = forceReloadDelayTime;
        this._forceReloadDebounce = _.debounce(() => this._caching = {}, this._forceReloadDelayTime);
    }
    /**
     * @return {void}
     */
    clearCache() {
        this._caching = {};
    }
    /**
     * @param {string} url
     * @param {string=} method
     * @param {ApiParams=} params
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    call(url, method = 'get', params = {}, headers = {}, options) {
        return new Observable((observer) => {
            method = _.toLower(method);
            /* eslint-disable @typescript-eslint/naming-convention */
            const defaultHttpHeaders = {
                'Content-Type': 'application/json;charset=UTF-8',
                'Force-Reload': String(!this._caching[url]),
            };
            /* eslint-enable @typescript-eslint/naming-convention */
            const httpHeaders = headers === null
                ? new HttpHeaders(defaultHttpHeaders)
                : this._setHeaders({ ...defaultHttpHeaders, ...headers });
            const queryParams = params.queryParams || params;
            const bodyParams = params.bodyParams || params;
            const isGetOrDeleteMethod = method === 'delete' || method === 'get';
            const hasQueryParams = isGetOrDeleteMethod || _.has(params, 'queryParams');
            let newURL = _.arrayJoin([this._baseURL, url], '');
            let newOptions = { ...options, headers: httpHeaders };
            let newParams;
            if (hasQueryParams) {
                const searchParams = new URLSearchParams();
                _.forEach(queryParams, (value, key) => { searchParams.set(key, value); });
                newURL = _.arrayJoin([newURL, searchParams.toString()], '?');
            }
            if (isGetOrDeleteMethod) {
                newParams = newOptions;
                newOptions = undefined;
            }
            else {
                newParams = bodyParams;
            }
            this._http[method](newURL, newParams, newOptions)
                .pipe(options?.reportProgress ? takeWhile((res) => res.type <= 4) : take(1), finalize(() => { this._caching[url] = true; this._forceReloadDebounce(); }))
                .subscribe((response) => observer.next(response), (error) => observer.error(this._failCallback(error)), () => observer.complete());
        });
    }
    /**
     * @param {string} url
     * @param {FileList | Array<File>} files
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    upload(url, files, headers = {}, options) {
        return new Observable((observer) => {
            const httpHeaders = this._setHeaders(headers);
            const formData = new FormData();
            const newOptions = { ...options, headers: httpHeaders };
            const fullURL = _.arrayJoin([this._baseURL, url], '');
            // In case files is file list or array files
            if (files instanceof FileList || files instanceof Array) {
                _.forEach(files, (file) => { formData.append('files[]', file, file.name); });
            }
            else {
                formData.append('file', files);
            }
            this._http.post(fullURL, formData, newOptions)
                .pipe(options?.reportProgress ? takeWhile((res) => res.type <= 4) : take(1))
                .subscribe((response) => observer.next(response), (error) => observer.error(this._failCallback(error)), () => observer.complete());
        });
    }
    /**
     * @param {ApiHeaders} headers
     * @return {HttpHeaders}
     */
    _setHeaders(headers) {
        const authorized = this._storageService.getCookie(this.storageConfig.authorizedKey);
        const accessToken = this._accessToken || authorized?.accessToken;
        // eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
        if (!_.has(headers, 'Authorization'))
            headers['Authorization'] = `Bearer ${accessToken}`;
        return new HttpHeaders(headers);
    }
    /**
     * @param {any} error
     * @return {any}
     */
    _failCallback(error) {
        this.errorCatcher$.next(error);
        return error;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService)); };
ApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable
    }], function () { return [{ type: i3.ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: i3.StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: i1.HttpClient }, { type: i2.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFNaEcsTUFBTSxPQUFPLFVBQVU7SUFXdEI7Ozs7OztPQU1HO0lBQ0gsWUFDc0QsWUFBMEIsRUFDekIsYUFBNEIsRUFDMUUsS0FBaUIsRUFDakIsZUFBK0I7UUFIYyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxRSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQXBCakMsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUVoRCxhQUFRLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFNUMsYUFBUSxHQUFpQyxFQUFFLENBQUM7UUFDNUMsMEJBQXFCLEdBQVcsS0FBSyxDQUFDO1FBQ3RDLHlCQUFvQixHQUN6QixDQUFDLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxV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Q0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxXQUFXLENBQUUsT0FBbUI7UUFDdkMsTUFBTSxVQUFVLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQztRQUMzRixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsRUFBRSxXQUFXLENBQUM7UUFFekUseUVBQXlFO1FBQ3pFLElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxlQUFlLENBQUU7WUFBRyxPQUFPLENBQUUsZUFBZSxDQUFFLEdBQUcsVUFBVSxXQUFXLEVBQUUsQ0FBQztRQUUvRixPQUFPLElBQUksV0FBVyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSyxhQUFhLENBQUUsS0FBVTtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUVqQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7O29FQXBMVyxVQUFVLGNBbUJBLGFBQWEsa0JBQ2IsY0FBYztnRUFwQnhCLFVBQVUsV0FBVixVQUFVO3VGQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBb0JSLFFBQVE7O3NCQUFJLE1BQU07dUJBQUUsYUFBYTs7c0JBQ2pDLFFBQVE7O3NCQUFJLE1BQU07dUJBQUUsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0VSVkVSX0NPTkZJRywgU2VydmVyQ29uZmlnLCBTVE9SQUdFX0NPTkZJRywgU3RvcmFnZUNvbmZpZyB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpSGVhZGVycyB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpUGFyYW1zIHsgWyBrZXk6IHN0cmluZyBdOiBhbnkgfVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0cHVibGljIGVycm9yQ2F0Y2hlciQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuXHRwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSB0aGlzLnNlcnZlckNvbmZpZy5hcGlVUkw7XG5cdHByaXZhdGUgX2FjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdHByaXZhdGUgX2NhY2hpbmc6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0gPSB7fTtcblx0cHJpdmF0ZSBfZm9yY2VSZWxvYWREZWxheVRpbWU6IG51bWJlciA9IDYwMDAwO1xuXHRwcml2YXRlIF9mb3JjZVJlbG9hZERlYm91bmNlOiBSZXR1cm5UeXBlPHR5cGVvZiBfLmRlYm91bmNlPlxuXHRcdD0gXy5kZWJvdW5jZSggdGhpcy5jbGVhckNhY2hlLmJpbmQoIHRoaXMgKSwgdGhpcy5fZm9yY2VSZWxvYWREZWxheVRpbWUgKTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2VydmVyQ29uZmlnfSBzZXJ2ZXJDb25maWdcblx0ICogQHBhcmFtIHtTdG9yYWdlQ29uZmlnfSBzdG9yYWdlQ29uZmlnXG5cdCAqIEBwYXJhbSB7SHR0cENsaWVudH0gX2h0dHBcblx0ICogQHBhcmFtIHtTdG9yYWdlU2VydmljZX0gX3N0b3JhZ2VTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBTRVJWRVJfQ09ORklHICkgcHVibGljIHJlYWRvbmx5IHNlcnZlckNvbmZpZzogU2VydmVyQ29uZmlnLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIFNUT1JBR0VfQ09ORklHICkgcHVibGljIHJlYWRvbmx5IHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcsXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcblx0XHRwcml2YXRlIF9zdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0QmFzZVVSTCggdXJsOiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5fYmFzZVVSTCA9IHVybDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW5cblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRBY2Nlc3NUb2tlbiggYWNjZXNzVG9rZW46IHN0cmluZyApIHtcblx0XHR0aGlzLl9hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmb3JjZVJlbG9hZERlbGF5VGltZVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldEZvcmNlUmVsb2FkRGVsYXlUaW1lKCBmb3JjZVJlbG9hZERlbGF5VGltZTogbnVtYmVyICkge1xuXHRcdHRoaXMuX2ZvcmNlUmVsb2FkRGVib3VuY2U/LmNhbmNlbCgpO1xuXG5cdFx0dGhpcy5fZm9yY2VSZWxvYWREZWxheVRpbWUgPSBmb3JjZVJlbG9hZERlbGF5VGltZTtcblx0XHR0aGlzLl9mb3JjZVJlbG9hZERlYm91bmNlID0gXy5kZWJvdW5jZSggKCkgPT4gdGhpcy5fY2FjaGluZyA9IHt9LCB0aGlzLl9mb3JjZVJlbG9hZERlbGF5VGltZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xlYXJDYWNoZSgpIHtcblx0XHR0aGlzLl9jYWNoaW5nID0ge307XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybFxuXHQgKiBAcGFyYW0ge3N0cmluZz19IG1ldGhvZFxuXHQgKiBAcGFyYW0ge0FwaVBhcmFtcz19IHBhcmFtc1xuXHQgKiBAcGFyYW0ge0FwaUhlYWRlcnM9fSBoZWFkZXJzXG5cdCAqIEBwYXJhbSB7YW55PX0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0cHVibGljIGNhbGwoXG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0bWV0aG9kOiBzdHJpbmcgPSAnZ2V0Jyxcblx0XHRwYXJhbXM6IEFwaVBhcmFtcyB8IHsgcXVlcnlQYXJhbXM6IEFwaVBhcmFtczsgYm9keVBhcmFtczogQXBpUGFyYW1zIH0gPSB7fSxcblx0XHRoZWFkZXJzOiBBcGlIZWFkZXJzID0ge30sXG5cdFx0b3B0aW9ucz86IGFueVxuXHQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdG1ldGhvZCA9IF8udG9Mb3dlciggbWV0aG9kICk7XG5cblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuXHRcdFx0Y29uc3QgZGVmYXVsdEh0dHBIZWFkZXJzOiBBcGlIZWFkZXJzID0ge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG5cdFx0XHRcdCdGb3JjZS1SZWxvYWQnOiBTdHJpbmcoICF0aGlzLl9jYWNoaW5nWyB1cmwgXSApLFxuXHRcdFx0fTtcblx0XHRcdC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cdFx0XHRjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBoZWFkZXJzID09PSBudWxsXG5cdFx0XHRcdD8gbmV3IEh0dHBIZWFkZXJzKCBkZWZhdWx0SHR0cEhlYWRlcnMgKVxuXHRcdFx0XHQ6IHRoaXMuX3NldEhlYWRlcnMoeyAuLi5kZWZhdWx0SHR0cEhlYWRlcnMsIC4uLmhlYWRlcnMgfSk7XG5cdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpSGVhZGVycyA9IHBhcmFtcy5xdWVyeVBhcmFtcyB8fCBwYXJhbXM7XG5cdFx0XHRjb25zdCBib2R5UGFyYW1zOiBBcGlIZWFkZXJzID0gcGFyYW1zLmJvZHlQYXJhbXMgfHwgcGFyYW1zO1xuXHRcdFx0Y29uc3QgaXNHZXRPckRlbGV0ZU1ldGhvZDogYm9vbGVhbiA9IG1ldGhvZCA9PT0gJ2RlbGV0ZScgfHwgbWV0aG9kID09PSAnZ2V0Jztcblx0XHRcdGNvbnN0IGhhc1F1ZXJ5UGFyYW1zOiBib29sZWFuID0gaXNHZXRPckRlbGV0ZU1ldGhvZCB8fCBfLmhhcyggcGFyYW1zLCAncXVlcnlQYXJhbXMnICk7XG5cdFx0XHRsZXQgbmV3VVJMOiBzdHJpbmcgPSBfLmFycmF5Sm9pbiggWyB0aGlzLl9iYXNlVVJMLCB1cmwgXSwgJycgKTtcblx0XHRcdGxldCBuZXdPcHRpb25zOiB7IFsga2V5OiBzdHJpbmcgXTogSHR0cEhlYWRlcnMgfSA9IHsgLi4ub3B0aW9ucywgaGVhZGVyczogaHR0cEhlYWRlcnMgfTtcblx0XHRcdGxldCBuZXdQYXJhbXM6IEFwaVBhcmFtcztcblxuXHRcdFx0aWYgKCBoYXNRdWVyeVBhcmFtcyApIHtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRcdFx0Xy5mb3JFYWNoKCBxdWVyeVBhcmFtcywgKCB2YWx1ZTogYW55LCBrZXk6IHN0cmluZyApID0+IHsgc2VhcmNoUGFyYW1zLnNldCgga2V5LCB2YWx1ZSApOyB9ICk7XG5cblx0XHRcdFx0bmV3VVJMID0gXy5hcnJheUpvaW4oIFsgbmV3VVJMLCBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKSBdLCAnPycgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBpc0dldE9yRGVsZXRlTWV0aG9kICkge1xuXHRcdFx0XHRuZXdQYXJhbXMgPSBuZXdPcHRpb25zO1xuXHRcdFx0XHRuZXdPcHRpb25zID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3UGFyYW1zID0gYm9keVBhcmFtcztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5faHR0cFsgbWV0aG9kIF0oIG5ld1VSTCwgbmV3UGFyYW1zLCBuZXdPcHRpb25zIClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRvcHRpb25zPy5yZXBvcnRQcm9ncmVzcyA/IHRha2VXaGlsZSggKCByZXM6IEh0dHBSZXNwb25zZTxhbnk+ICkgPT4gcmVzLnR5cGUgPD0gNCApIDogdGFrZSggMSApLFxuXHRcdFx0XHRmaW5hbGl6ZSggKCkgPT4geyB0aGlzLl9jYWNoaW5nWyB1cmwgXSA9IHRydWU7IHRoaXMuX2ZvcmNlUmVsb2FkRGVib3VuY2UoKTsgfSApXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoIHJlc3BvbnNlOiBhbnkgKSA9PiBvYnNlcnZlci5uZXh0KCByZXNwb25zZSApLFxuXHRcdFx0XHQoIGVycm9yOiBhbnkgKSA9PiBvYnNlcnZlci5lcnJvciggdGhpcy5fZmFpbENhbGxiYWNrKCBlcnJvciApICksXG5cdFx0XHRcdCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcblx0ICogQHBhcmFtIHtGaWxlTGlzdCB8IEFycmF5PEZpbGU+fSBmaWxlc1xuXHQgKiBAcGFyYW0ge0FwaUhlYWRlcnM9fSBoZWFkZXJzXG5cdCAqIEBwYXJhbSB7YW55PX0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0cHVibGljIHVwbG9hZChcblx0XHR1cmw6IHN0cmluZyxcblx0XHRmaWxlczogRmlsZUxpc3QgfCBBcnJheTxGaWxlPixcblx0XHRoZWFkZXJzOiBBcGlIZWFkZXJzID0ge30sXG5cdFx0b3B0aW9ucz86IGFueVxuXHQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuX3NldEhlYWRlcnMoIGhlYWRlcnMgKTtcblx0XHRcdGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdFx0Y29uc3QgbmV3T3B0aW9uczogeyBbIGhlYWRlcnM6IHN0cmluZyBdOiBIdHRwSGVhZGVycyB9ID0geyAuLi5vcHRpb25zLCBoZWFkZXJzOiBodHRwSGVhZGVycyB9O1xuXHRcdFx0Y29uc3QgZnVsbFVSTDogc3RyaW5nID0gXy5hcnJheUpvaW4oIFsgdGhpcy5fYmFzZVVSTCwgdXJsIF0sICcnICk7XG5cblx0XHRcdC8vIEluIGNhc2UgZmlsZXMgaXMgZmlsZSBsaXN0IG9yIGFycmF5IGZpbGVzXG5cdFx0XHRpZiAoIGZpbGVzIGluc3RhbmNlb2YgRmlsZUxpc3QgfHwgZmlsZXMgaW5zdGFuY2VvZiBBcnJheSApIHtcblx0XHRcdFx0Xy5mb3JFYWNoKCBmaWxlcywgKCBmaWxlOiBGaWxlICkgPT4geyBmb3JtRGF0YS5hcHBlbmQoICdmaWxlc1tdJywgZmlsZSwgZmlsZS5uYW1lICk7IH0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCggJ2ZpbGUnLCBmaWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9odHRwLnBvc3QoIGZ1bGxVUkwsIGZvcm1EYXRhLCBuZXdPcHRpb25zIClcblx0XHRcdC5waXBlKCBvcHRpb25zPy5yZXBvcnRQcm9ncmVzcyA/IHRha2VXaGlsZSggKCByZXM6IEh0dHBSZXNwb25zZTxhbnk+ICkgPT4gcmVzLnR5cGUgPD0gNCApIDogdGFrZSggMSApIClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCggcmVzcG9uc2U6IGFueSApID0+IG9ic2VydmVyLm5leHQoIHJlc3BvbnNlICksXG5cdFx0XHRcdCggZXJyb3I6IGFueSApID0+IG9ic2VydmVyLmVycm9yKCB0aGlzLl9mYWlsQ2FsbGJhY2soIGVycm9yICkgKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcGlIZWFkZXJzfSBoZWFkZXJzXG5cdCAqIEByZXR1cm4ge0h0dHBIZWFkZXJzfVxuXHQgKi9cblx0cHJpdmF0ZSBfc2V0SGVhZGVycyggaGVhZGVyczogQXBpSGVhZGVycyApOiBIdHRwSGVhZGVycyB7XG5cdFx0Y29uc3QgYXV0aG9yaXplZDogYW55ID0gdGhpcy5fc3RvcmFnZVNlcnZpY2UuZ2V0Q29va2llKCB0aGlzLnN0b3JhZ2VDb25maWcuYXV0aG9yaXplZEtleSApO1xuXHRcdGNvbnN0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSB0aGlzLl9hY2Nlc3NUb2tlbiB8fCBhdXRob3JpemVkPy5hY2Nlc3NUb2tlbjtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb24sIEB0eXBlc2NyaXB0LWVzbGludC9kb3Qtbm90YXRpb25cblx0XHRpZiAoICFfLmhhcyggaGVhZGVycywgJ0F1dGhvcml6YXRpb24nICkgKSBoZWFkZXJzWyAnQXV0aG9yaXphdGlvbicgXSA9IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gO1xuXG5cdFx0cmV0dXJuIG5ldyBIdHRwSGVhZGVycyggaGVhZGVycyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSBlcnJvclxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwcml2YXRlIF9mYWlsQ2FsbGJhY2soIGVycm9yOiBhbnkgKTogYW55IHtcblx0XHR0aGlzLmVycm9yQ2F0Y2hlciQubmV4dCggZXJyb3IgKTtcblxuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG59XG4iXX0=