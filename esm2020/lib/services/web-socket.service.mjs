import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import io from 'socket.io-client';
import _ from 'lodash';
import { StorageService } from './storage.service';
import { SERVER_CONFIG, ServerConfig, STORAGE_CONFIG, StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
import * as i2 from "../injection-token";
export class WebSocketService {
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {ServerConfig} storageConfig
     * @param {StorageService} _storageService
     */
    constructor(serverConfig, storageConfig, _storageService) {
        this.serverConfig = serverConfig;
        this.storageConfig = storageConfig;
        this._storageService = _storageService;
        this._socketChange$ = new ReplaySubject();
    }
    get socketChange$() { return this._socketChange$; }
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }
    /**
     * @param {WebSocketConfig} config
     * @return {Observable}
     */
    connect(config) {
        return new Observable((observer) => {
            const url = config?.url || this.serverConfig.wsURL;
            const namespace = config?.namespace;
            const authorized = this._storageService.getCookie(this.storageConfig.authorizedKey);
            const token = this._accessToken || authorized?.accessToken;
            const uri = _.join([url, namespace], '/');
            const options = { auth: { token }, ...config?.options };
            this._socket = io(uri, options);
            this._socket.on('connect', () => {
                this._socketChange$.next(this._socket);
                observer.next(this._socket);
            });
        });
    }
    /**
     * @param {string} event
     * @param {any} data
     * @return {void}
     */
    emit(event, data) {
        this._socket?.emit(event, data);
    }
    /**
     * @param {string} event
     * @return {Observable}
     */
    on(event) {
        return new Observable((observer) => {
            this._socket?.on(event, (data) => observer.next(data));
        });
    }
    /**
     * @return {void}
     */
    disconnect() {
        this._socket?.disconnect();
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(i0.ɵɵinject(SERVER_CONFIG, 8), i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(i1.StorageService)); };
WebSocketService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebSocketService, factory: WebSocketService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebSocketService, [{
        type: Injectable
    }], function () { return [{ type: i2.ServerConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SERVER_CONFIG]
            }] }, { type: i2.StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: i1.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy93ZWItc29ja2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQVksYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBNkMsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQVdoRyxNQUFNLE9BQU8sZ0JBQWdCO0lBUTVCOzs7OztPQUtHO0lBQ0gsWUFDc0QsWUFBMEIsRUFDekIsYUFBNEIsRUFDMUUsZUFBK0I7UUFGYyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxRSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFiaEMsbUJBQWMsR0FBMEIsSUFBSSxhQUFhLEVBQVUsQ0FBQztJQWN6RSxDQUFDO0lBWkosSUFBSSxhQUFhLEtBQTRCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFjMUU7OztPQUdHO0lBQ0ksY0FBYyxDQUFFLFdBQW1CO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPLENBQUUsTUFBd0I7UUFDdkMsT0FBTyxJQUFJLFVBQVUsQ0FBRSxDQUFFLFFBQTBCLEVBQUcsRUFBRTtZQUN2RCxNQUFNLEdBQUcsR0FBVyxNQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNELE1BQU0sU0FBUyxHQUFXLE1BQU0sRUFBRSxTQUFTLENBQUM7WUFDNUMsTUFBTSxVQUFVLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQztZQUMzRixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsRUFBRSxXQUFXLENBQUM7WUFDbkUsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUUsRUFBRSxHQUFHLENBQUUsQ0FBQztZQUN0RCxNQUFNLE9BQU8sR0FBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUUxRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBRSxHQUFHLEVBQUUsT0FBTyxDQUFFLENBQUM7WUFFbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO2dCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztZQUMvQixDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxJQUFJLENBQUUsS0FBYSxFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxFQUFFLENBQUUsS0FBYTtRQUN2QixPQUFPLElBQUksVUFBVSxDQUFFLENBQUUsUUFBdUIsRUFBRyxFQUFFO1lBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBRSxDQUFDO1FBQ25FLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dGQTFFVyxnQkFBZ0IsY0FlTixhQUFhLGtCQUNiLGNBQWM7c0VBaEJ4QixnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBZ0JSLFFBQVE7O3NCQUFJLE1BQU07dUJBQUUsYUFBYTs7c0JBQ2pDLFFBQVE7O3NCQUFJLE1BQU07dUJBQUUsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaW8sIHsgU29ja2V0LCBTb2NrZXRPcHRpb25zLCBNYW5hZ2VyT3B0aW9ucyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTRVJWRVJfQ09ORklHLCBTZXJ2ZXJDb25maWcsIFNUT1JBR0VfQ09ORklHLCBTdG9yYWdlQ29uZmlnIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuZXhwb3J0IHR5cGUgV2ViU29ja2V0T3B0aW9ucyA9IFNvY2tldE9wdGlvbnMgfCBNYW5hZ2VyT3B0aW9ucztcblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRDb25maWcge1xuXHR1cmw/OiBzdHJpbmc7XG5cdG5hbWVzcGFjZT86IHN0cmluZztcblx0b3B0aW9ucz86IFdlYlNvY2tldE9wdGlvbnM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIF9hY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRwcml2YXRlIF9zb2NrZXQ6IFNvY2tldDtcblx0cHJpdmF0ZSBfc29ja2V0Q2hhbmdlJDogUmVwbGF5U3ViamVjdDxTb2NrZXQ+ID0gbmV3IFJlcGxheVN1YmplY3Q8U29ja2V0PigpO1xuXG5cdGdldCBzb2NrZXRDaGFuZ2UkKCk6IFJlcGxheVN1YmplY3Q8U29ja2V0PiB7IHJldHVybiB0aGlzLl9zb2NrZXRDaGFuZ2UkOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NlcnZlckNvbmZpZ30gc2VydmVyQ29uZmlnXG5cdCAqIEBwYXJhbSB7U2VydmVyQ29uZmlnfSBzdG9yYWdlQ29uZmlnXG5cdCAqIEBwYXJhbSB7U3RvcmFnZVNlcnZpY2V9IF9zdG9yYWdlU2VydmljZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggU0VSVkVSX0NPTkZJRyApIHB1YmxpYyByZWFkb25seSBzZXJ2ZXJDb25maWc6IFNlcnZlckNvbmZpZyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBTVE9SQUdFX0NPTkZJRyApIHB1YmxpYyByZWFkb25seSBzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnLFxuXHRcdHByaXZhdGUgX3N0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuXHQpIHt9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlblxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldEFjY2Vzc1Rva2VuKCBhY2Nlc3NUb2tlbjogc3RyaW5nICkge1xuXHRcdHRoaXMuX2FjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtXZWJTb2NrZXRDb25maWd9IGNvbmZpZ1xuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0cHVibGljIGNvbm5lY3QoIGNvbmZpZz86IFdlYlNvY2tldENvbmZpZyApOiBPYnNlcnZhYmxlPFNvY2tldD4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8U29ja2V0PiApID0+IHtcblx0XHRcdGNvbnN0IHVybDogc3RyaW5nID0gY29uZmlnPy51cmwgfHwgdGhpcy5zZXJ2ZXJDb25maWcud3NVUkw7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2U6IHN0cmluZyA9IGNvbmZpZz8ubmFtZXNwYWNlO1xuXHRcdFx0Y29uc3QgYXV0aG9yaXplZDogYW55ID0gdGhpcy5fc3RvcmFnZVNlcnZpY2UuZ2V0Q29va2llKCB0aGlzLnN0b3JhZ2VDb25maWcuYXV0aG9yaXplZEtleSApO1xuXHRcdFx0Y29uc3QgdG9rZW46IHN0cmluZyA9IHRoaXMuX2FjY2Vzc1Rva2VuIHx8IGF1dGhvcml6ZWQ/LmFjY2Vzc1Rva2VuO1xuXHRcdFx0Y29uc3QgdXJpOiBzdHJpbmcgPSBfLmpvaW4oIFsgdXJsLCBuYW1lc3BhY2UgXSwgJy8nICk7XG5cdFx0XHRjb25zdCBvcHRpb25zOiBXZWJTb2NrZXRPcHRpb25zID0geyBhdXRoOiB7IHRva2VuIH0sIC4uLmNvbmZpZz8ub3B0aW9ucyB9O1xuXG5cdFx0XHR0aGlzLl9zb2NrZXQgPSBpbyggdXJpLCBvcHRpb25zICk7XG5cblx0XHRcdHRoaXMuX3NvY2tldC5vbiggJ2Nvbm5lY3QnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX3NvY2tldENoYW5nZSQubmV4dCggdGhpcy5fc29ja2V0ICk7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIHRoaXMuX3NvY2tldCApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcblx0ICogQHBhcmFtIHthbnl9IGRhdGFcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBlbWl0KCBldmVudDogc3RyaW5nLCBkYXRhOiBhbnkgKSB7XG5cdFx0dGhpcy5fc29ja2V0Py5lbWl0KCBldmVudCwgZGF0YSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0cHVibGljIG9uKCBldmVudDogc3RyaW5nICk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCAoIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+ICkgPT4ge1xuXHRcdFx0dGhpcy5fc29ja2V0Py5vbiggZXZlbnQsICggZGF0YTogYW55ICkgPT4gb2JzZXJ2ZXIubmV4dCggZGF0YSApICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZGlzY29ubmVjdCgpIHtcblx0XHR0aGlzLl9zb2NrZXQ/LmRpc2Nvbm5lY3QoKTtcblx0fVxuXG59XG4iXX0=