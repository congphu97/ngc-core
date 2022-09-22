import { Injectable, Inject, Optional } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import moment from 'moment-timezone';
import _ from 'lodash';
import { STORAGE_CONFIG, StorageConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie-service";
import * as i2 from "../injection-token";
export class StorageService {
    /**
     * @constructor
     * @param {StorageConfig} storageConfig
     * @param {CookieService} _cookieService
     */
    constructor(storageConfig, _cookieService) {
        this.storageConfig = storageConfig;
        this._cookieService = _cookieService;
        this._cookieOptions = { path: '/', sameSite: 'None', secure: true };
    }
    /**
     * @param {CookieOptions} options
     * @return {void}
     */
    setCookieOptions(options) {
        this._cookieOptions = _.assign(this._cookieOptions, options);
    }
    /**
     * @param {string} key
     * @param {any} data
     * @param {(number | Date)=} expires
     * @return {void}
     */
    setCookie(key, data, expires = this.storageConfig.expireDays) {
        const hashKey = this.storageConfig.hashKey;
        if (!hashKey)
            return;
        const hashValue = _.aesEncrypt(data, hashKey);
        const options = this._mergeCookieOptions(expires);
        this._cookieService.set(key, hashValue, options.expires, options.path, options.domain, options.secure, options.sameSite);
    }
    /**
     * @param {string} key
     * @return {any}
     */
    getCookie(key) {
        const hashKey = this.storageConfig.hashKey;
        const hashValue = this._cookieService.get(key);
        if (!hashKey || !hashValue)
            return;
        return _.aesDecrypt(hashValue, hashKey);
    }
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateCookie(key, updateData) {
        const data = this.getCookie(key);
        this.setCookie(key, { ...data, ...updateData });
    }
    /**
     * @param {string} key
     * @return {void}
     */
    removeCookie(key) {
        this._cookieService.delete(key, this._cookieOptions.path, this._cookieOptions.domain, this._cookieOptions.secure, this._cookieOptions.sameSite);
    }
    /**
     * @return {void}
     */
    clearAllCookies() {
        this._cookieService.deleteAll(this._cookieOptions.path, this._cookieOptions.domain, this._cookieOptions.secure, this._cookieOptions.sameSite);
    }
    /**
     * @param {string} key
     * @param {any} data
     * @return {void}
     */
    setLocal(key, data) {
        const hashKey = this.storageConfig.hashKey;
        if (!hashKey)
            return;
        const hashValue = _.aesEncrypt(data, hashKey);
        localStorage.setItem(key, hashValue);
    }
    /**
     * @param {string} key
     * @return {any}
     */
    getLocal(key) {
        const hashKey = this.storageConfig.hashKey;
        const hashValue = localStorage.getItem(key);
        if (!hashKey || !hashValue)
            return;
        return _.aesDecrypt(hashValue, hashKey);
    }
    /**
     * @param {string} key
     * @param {any} updateData
     * @return {void}
     */
    updateLocal(key, updateData) {
        const data = this.getLocal(key);
        this.setLocal(key, { ...data, ...updateData });
    }
    /**
     * @param {string} key
     * @return {void}
     */
    removeLocal(key) {
        localStorage.removeItem(key);
    }
    /**
     * @return {void}
     */
    clearAllLocals() {
        localStorage.clear();
    }
    /**
     * @param {number | Date} expires
     * @return {CookieOptions} options
     */
    _mergeCookieOptions(expires) {
        const options = {};
        if (expires) {
            options.expires = expires instanceof Date
                ? expires
                : moment(+moment() + 24 * 60 * 60 * 1000 * expires).toDate();
        }
        return _.assign(options, this._cookieOptions);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(i0.ɵɵinject(STORAGE_CONFIG, 8), i0.ɵɵinject(i1.CookieService)); };
StorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable
    }], function () { return [{ type: i2.StorageConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STORAGE_CONFIG]
            }] }, { type: i1.CookieService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQVduRSxNQUFNLE9BQU8sY0FBYztJQUkxQjs7OztPQUlHO0lBQ0gsWUFDdUQsYUFBNEIsRUFDMUUsY0FBNkI7UUFEaUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFUOUIsbUJBQWMsR0FBa0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBVW5GLENBQUM7SUFFSjs7O09BR0c7SUFDSSxnQkFBZ0IsQ0FBRSxPQUFzQjtRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxTQUFTLENBQUUsR0FBVyxFQUFFLElBQVMsRUFBRSxVQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVU7UUFDL0YsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFFbkQsSUFBSyxDQUFDLE9BQU87WUFBRyxPQUFPO1FBRXZCLE1BQU0sU0FBUyxHQUFRLENBQUMsQ0FB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QUFVLEVBQUUsQ0FBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUUsR0FBVztRQUM5QixZQUFZLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDcEIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxtQkFBbUIsQ0FBRSxPQUFzQjtRQUNsRCxNQUFNLE9BQU8sR0FBa0IsRUFBRSxDQUFDO1FBRWxDLElBQUssT0FBTyxFQUFHO1lBQ2QsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLFlBQVksSUFBSTtnQkFDeEMsQ0FBQyxDQUFDLE9BQU87Z0JBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNoRTtRQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO0lBQ2pELENBQUM7OzRFQTNKVyxjQUFjLGNBVUosY0FBYztvRUFWeEIsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVOztzQkFXUixRQUFROztzQkFBSSxNQUFNO3VCQUFFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNUT1JBR0VfQ09ORklHLCBTdG9yYWdlQ29uZmlnIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29raWVPcHRpb25zIHtcblx0ZXhwaXJlcz86IG51bWJlciB8IERhdGU7XG5cdHBhdGg/OiBzdHJpbmc7XG5cdGRvbWFpbj86IHN0cmluZztcblx0c2VjdXJlPzogYm9vbGVhbjtcblx0c2FtZVNpdGU/OiAnTGF4JyB8ICdOb25lJyB8ICdTdHJpY3QnO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgX2Nvb2tpZU9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7IHBhdGg6ICcvJywgc2FtZVNpdGU6ICdOb25lJywgc2VjdXJlOiB0cnVlIH07XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1N0b3JhZ2VDb25maWd9IHN0b3JhZ2VDb25maWdcblx0ICogQHBhcmFtIHtDb29raWVTZXJ2aWNlfSBfY29va2llU2VydmljZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggU1RPUkFHRV9DT05GSUcgKSBwdWJsaWMgcmVhZG9ubHkgc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyxcblx0XHRwcml2YXRlIF9jb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0Q29va2llT3B0aW9ucyggb3B0aW9uczogQ29va2llT3B0aW9ucyApIHtcblx0XHR0aGlzLl9jb29raWVPcHRpb25zID0gXy5hc3NpZ24oIHRoaXMuX2Nvb2tpZU9wdGlvbnMsIG9wdGlvbnMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCAqIEBwYXJhbSB7KG51bWJlciB8IERhdGUpPX0gZXhwaXJlc1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldENvb2tpZSgga2V5OiBzdHJpbmcsIGRhdGE6IGFueSwgZXhwaXJlczogbnVtYmVyIHwgRGF0ZSA9IHRoaXMuc3RvcmFnZUNvbmZpZy5leHBpcmVEYXlzICkge1xuXHRcdGNvbnN0IGhhc2hLZXk6IHN0cmluZyA9IHRoaXMuc3RvcmFnZUNvbmZpZy5oYXNoS2V5O1xuXG5cdFx0aWYgKCAhaGFzaEtleSApIHJldHVybjtcblxuXHRcdGNvbnN0IGhhc2hWYWx1ZTogYW55ID0gXy5hZXNFbmNyeXB0KCBkYXRhLCBoYXNoS2V5ICk7XG5cdFx0Y29uc3Qgb3B0aW9uczogQ29va2llT3B0aW9ucyA9IHRoaXMuX21lcmdlQ29va2llT3B0aW9ucyggZXhwaXJlcyApO1xuXG5cdFx0dGhpcy5fY29va2llU2VydmljZS5zZXQoXG5cdFx0XHRrZXksIGhhc2hWYWx1ZSwgb3B0aW9ucy5leHBpcmVzLCBvcHRpb25zLnBhdGgsXG5cdFx0XHRvcHRpb25zLmRvbWFpbiwgb3B0aW9ucy5zZWN1cmUsIG9wdGlvbnMuc2FtZVNpdGVcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIGdldENvb2tpZSgga2V5OiBzdHJpbmcgKTogYW55IHtcblx0XHRjb25zdCBoYXNoS2V5OiBzdHJpbmcgPSB0aGlzLnN0b3JhZ2VDb25maWcuaGFzaEtleTtcblx0XHRjb25zdCBoYXNoVmFsdWU6IHN0cmluZyA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UuZ2V0KCBrZXkgKTtcblxuXHRcdGlmICggIWhhc2hLZXkgfHwgIWhhc2hWYWx1ZSApIHJldHVybjtcblxuXHRcdHJldHVybiBfLmFlc0RlY3J5cHQoIGhhc2hWYWx1ZSwgaGFzaEtleSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHBhcmFtIHthbnl9IHVwZGF0ZURhdGFcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB1cGRhdGVDb29raWUoIGtleTogc3RyaW5nLCB1cGRhdGVEYXRhOiBhbnkgKSB7XG5cdFx0Y29uc3QgZGF0YTogYW55ID0gdGhpcy5nZXRDb29raWUoIGtleSApO1xuXG5cdFx0dGhpcy5zZXRDb29raWUoIGtleSwgeyAuLi5kYXRhLCAuLi51cGRhdGVEYXRhIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgcmVtb3ZlQ29va2llKCBrZXk6IHN0cmluZyApIHtcblx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmRlbGV0ZShcblx0XHRcdGtleSwgdGhpcy5fY29va2llT3B0aW9ucy5wYXRoLCB0aGlzLl9jb29raWVPcHRpb25zLmRvbWFpbixcblx0XHRcdHRoaXMuX2Nvb2tpZU9wdGlvbnMuc2VjdXJlLCB0aGlzLl9jb29raWVPcHRpb25zLnNhbWVTaXRlXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsZWFyQWxsQ29va2llcygpIHtcblx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmRlbGV0ZUFsbChcblx0XHRcdHRoaXMuX2Nvb2tpZU9wdGlvbnMucGF0aCwgdGhpcy5fY29va2llT3B0aW9ucy5kb21haW4sXG5cdFx0XHR0aGlzLl9jb29raWVPcHRpb25zLnNlY3VyZSwgdGhpcy5fY29va2llT3B0aW9ucy5zYW1lU2l0ZVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcGFyYW0ge2FueX0gZGF0YVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldExvY2FsKCBrZXk6IHN0cmluZywgZGF0YTogYW55ICkge1xuXHRcdGNvbnN0IGhhc2hLZXk6IHN0cmluZyA9IHRoaXMuc3RvcmFnZUNvbmZpZy5oYXNoS2V5O1xuXG5cdFx0aWYgKCAhaGFzaEtleSApIHJldHVybjtcblxuXHRcdGNvbnN0IGhhc2hWYWx1ZTogYW55ID0gXy5hZXNFbmNyeXB0KCBkYXRhLCBoYXNoS2V5ICk7XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgga2V5LCBoYXNoVmFsdWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdHB1YmxpYyBnZXRMb2NhbCgga2V5OiBzdHJpbmcgKTogYW55IHtcblx0XHRjb25zdCBoYXNoS2V5OiBzdHJpbmcgPSB0aGlzLnN0b3JhZ2VDb25maWcuaGFzaEtleTtcblx0XHRjb25zdCBoYXNoVmFsdWU6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBrZXkgKTtcblxuXHRcdGlmICggIWhhc2hLZXkgfHwgIWhhc2hWYWx1ZSApIHJldHVybjtcblxuXHRcdHJldHVybiBfLmFlc0RlY3J5cHQoIGhhc2hWYWx1ZSwgaGFzaEtleSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHBhcmFtIHthbnl9IHVwZGF0ZURhdGFcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB1cGRhdGVMb2NhbCgga2V5OiBzdHJpbmcsIHVwZGF0ZURhdGE6IGFueSApIHtcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB0aGlzLmdldExvY2FsKCBrZXkgKTtcblxuXHRcdHRoaXMuc2V0TG9jYWwoIGtleSwgeyAuLi5kYXRhLCAuLi51cGRhdGVEYXRhIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgcmVtb3ZlTG9jYWwoIGtleTogc3RyaW5nICkge1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBrZXkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsZWFyQWxsTG9jYWxzKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyIHwgRGF0ZX0gZXhwaXJlc1xuXHQgKiBAcmV0dXJuIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG5cdCAqL1xuXHRwcml2YXRlIF9tZXJnZUNvb2tpZU9wdGlvbnMoIGV4cGlyZXM6IG51bWJlciB8IERhdGUgKTogQ29va2llT3B0aW9ucyB7XG5cdFx0Y29uc3Qgb3B0aW9uczogQ29va2llT3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKCBleHBpcmVzICkge1xuXHRcdFx0b3B0aW9ucy5leHBpcmVzID0gZXhwaXJlcyBpbnN0YW5jZW9mIERhdGVcblx0XHRcdFx0PyBleHBpcmVzXG5cdFx0XHRcdDogbW9tZW50KCArbW9tZW50KCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICogZXhwaXJlcyApLnRvRGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfLmFzc2lnbiggb3B0aW9ucywgdGhpcy5fY29va2llT3B0aW9ucyApO1xuXHR9XG5cbn1cbiJdfQ==