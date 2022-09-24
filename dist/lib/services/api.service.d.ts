import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { ServerConfig, StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
export interface ApiHeaders {
    [key: string]: string;
}
export interface ApiParams {
    [key: string]: any;
}
export declare class ApiService {
    readonly serverConfig: ServerConfig;
    readonly storageConfig: StorageConfig;
    private _http;
    private _storageService;
    errorCatcher$: Subject<any>;
    private _baseURL;
    private _accessToken;
    private _caching;
    private _forceReloadDelayTime;
    private _forceReloadDebounce;
    /**
     * @constructor
     * @param {ServerConfig} serverConfig
     * @param {StorageConfig} storageConfig
     * @param {HttpClient} _http
     * @param {StorageService} _storageService
     */
    constructor(serverConfig: ServerConfig, storageConfig: StorageConfig, _http: HttpClient, _storageService: StorageService);
    /**
     * @param {string} url
     * @return {void}
     */
    setBaseURL(url: string): void;
    /**
     * @param {string} accessToken
     * @return {void}
     */
    setAccessToken(accessToken: string): void;
    /**
     * @param {number} forceReloadDelayTime
     * @return {void}
     */
    setForceReloadDelayTime(forceReloadDelayTime: number): void;
    /**
     * @return {void}
     */
    clearCache(): void;
    /**
     * @param {string} url
     * @param {string=} method
     * @param {ApiParams=} params
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    call(url: string, method?: string, params?: ApiParams | {
        queryParams: ApiParams;
        bodyParams: ApiParams;
    }, headers?: ApiHeaders, options?: any): Observable<any>;
    /**
     * @param {string} url
     * @param {FileList | Array<File>} files
     * @param {ApiHeaders=} headers
     * @param {any=} options
     * @return {Observable}
     */
    upload(url: string, files: FileList | Array<File>, headers?: ApiHeaders, options?: any): Observable<any>;
    /**
     * @param {ApiHeaders} headers
     * @return {HttpHeaders}
     */
    private _setHeaders;
    /**
     * @param {any} error
     * @return {any}
     */
    private _failCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, [{ optional: true; }, { optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
