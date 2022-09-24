import { CookieService } from 'ngx-cookie-service';
import { StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
export interface CookieOptions {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Lax' | 'None' | 'Strict';
}
export declare class StorageService {
    readonly storageConfig: StorageConfig;
    private _cookieService;
    private _cookieOptions;
    /**
     * @constructor
     * @param {StorageConfig} storageConfig
     * @param {CookieService} _cookieService
     */
    constructor(storageConfig: StorageConfig, _cookieService: CookieService);
    /**
     * @param {CookieOptions} options
     * @return {void}
     */
    setCookieOptions(options: CookieOptions): void;
    /**
     * @param {string} key
     * @param {any} data
     * @param {(number | Date)=} expires
     * @return {void}
     */
    setCookie(key: string, data: any, expires?: number | Date): void;
    /**
     * @param {string} key
     * @return {any}
     */
    getCookie(key: string): any;
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateCookie(key: string, updateData: any): void;
    /**
     * @param {string} key
     * @return {void}
     */
    removeCookie(key: string): void;
    /**
     * @return {void}
     */
    clearAllCookies(): void;
    /**
     * @param {string} key
     * @param {any} data
     * @return {void}
     */
    setLocal(key: string, data: any): void;
    /**
     * @param {string} key
     * @return {any}
     */
    getLocal(key: string): any;
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateLocal(key: string, updateData: any): void;
    /**
     * @param {string} key
     * @return {void}
     */
    removeLocal(key: string): void;
    /**
     * @return {void}
     */
    clearAllLocals(): void;
    /**
     * @param {number | Date} expires
     * @return {CookieOptions} options
     */
    private _mergeCookieOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}
