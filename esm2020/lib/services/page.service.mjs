import { Injectable, Inject, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../injection-token';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./storage.service";
import * as i4 from "../injection-token";
export class PageService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {Router} _router
     * @param {Title} _titleService
     * @param {StorageService} _storageService
     */
    constructor(appConfig, _router, _titleService, _storageService) {
        this.appConfig = appConfig;
        this._router = _router;
        this._titleService = _titleService;
        this._storageService = _storageService;
        this.cacheKey = '__curl';
        this._titleChange$ = new ReplaySubject();
        this._processChange$ = new ReplaySubject();
    }
    /**
     * @return {ReplaySubject}
     */
    get title() {
        return this._titleChange$;
    }
    /**
     * @return {ReplaySubject}
     */
    get processing() {
        return this._processChange$;
    }
    /**
     * @param {string} title
     * @param {string=} prefix
     * @return {void}
     */
    setTitle(title, prefix = this.appConfig.name) {
        this._titleService.setTitle(prefix + ' - ' + title);
        this._titleChange$.next(title);
    }
    /**
     * @return {string}
     */
    getTitle() {
        return this._titleService.getTitle();
    }
    /**
     * @param {string} path
     * @param {NavigationExtras} extras
     * @return {void}
     */
    setCurrentURL(path, extras) {
        path
            ? this._storageService.setLocal(this.cacheKey, { path, extras })
            : this._storageService.removeLocal(this.cacheKey);
    }
    /**
     * @return {PageURL}
     */
    getCurrentURL() {
        return this._storageService.getLocal(this.cacheKey) || { path: this.appConfig.mainPath };
    }
    /**
     * @return {void}
     */
    navigateToCurrentURL() {
        const url = this.getCurrentURL();
        this._router.navigate([url.path], url.extras);
    }
    /**
     * @param {boolean} isProcessing
     * @return {void}
     */
    setProcessing(isProcessing) {
        isProcessing
            ? this._processChange$.next(true)
            : setTimeout(() => this._processChange$.next(false), 1000);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.Title), i0.ɵɵinject(i3.StorageService)); };
PageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageService, [{
        type: Injectable
    }], function () { return [{ type: i4.AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.Router }, { type: i2.Title }, { type: i3.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQVFuRCxNQUFNLE9BQU8sV0FBVztJQXFCdkI7Ozs7OztPQU1HO0lBQ0gsWUFDbUQsU0FBb0IsRUFDOUQsT0FBZSxFQUNmLGFBQW9CLEVBQ3BCLGVBQStCO1FBSFcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM5RCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQU87UUFDcEIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBOUJqQyxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBRTNCLGtCQUFhLEdBQTBCLElBQUksYUFBYSxFQUFVLENBQUM7UUFDbkUsb0JBQWUsR0FBMkIsSUFBSSxhQUFhLEVBQVcsQ0FBQztJQTRCNUUsQ0FBQztJQTFCSjs7T0FFRztJQUNILElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQWdCRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFFLEtBQWEsRUFBRSxTQUFpQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUUsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYSxDQUFFLElBQVksRUFBRSxNQUF5QjtRQUM1RCxJQUFJO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUU7WUFDbEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0JBQW9CO1FBQzFCLE1BQU0sR0FBRyxHQUFZLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGFBQWEsQ0FBRSxZQUFxQjtRQUMxQyxZQUFZO1lBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRTtZQUNuQyxDQUFDLENBQUMsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ2pFLENBQUM7O3NFQXZGVyxXQUFXLGNBNkJELFVBQVU7aUVBN0JwQixXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVU7O3NCQThCUixRQUFROztzQkFBSSxNQUFNO3VCQUFFLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQVBQX0NPTkZJRywgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VVUkwge1xuXHRwYXRoOiBzdHJpbmc7XG5cdGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSB7XG5cblx0cHVibGljIGNhY2hlS2V5OiBzdHJpbmcgPSAnX19jdXJsJztcblxuXHRwcml2YXRlIF90aXRsZUNoYW5nZSQ6IFJlcGxheVN1YmplY3Q8c3RyaW5nPiA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oKTtcblx0cHJpdmF0ZSBfcHJvY2Vzc0NoYW5nZSQ6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtSZXBsYXlTdWJqZWN0fVxuXHQgKi9cblx0Z2V0IHRpdGxlKCk6IFJlcGxheVN1YmplY3Q8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpdGxlQ2hhbmdlJDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtSZXBsYXlTdWJqZWN0fVxuXHQgKi9cblx0Z2V0IHByb2Nlc3NpbmcoKTogUmVwbGF5U3ViamVjdDxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3Byb2Nlc3NDaGFuZ2UkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0FwcENvbmZpZ30gYXBwQ29uZmlnXG5cdCAqIEBwYXJhbSB7Um91dGVyfSBfcm91dGVyXG5cdCAqIEBwYXJhbSB7VGl0bGV9IF90aXRsZVNlcnZpY2Vcblx0ICogQHBhcmFtIHtTdG9yYWdlU2VydmljZX0gX3N0b3JhZ2VTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBBUFBfQ09ORklHICkgcHVibGljIHJlYWRvbmx5IGFwcENvbmZpZzogQXBwQ29uZmlnLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3RpdGxlU2VydmljZTogVGl0bGUsXG5cdFx0cHJpdmF0ZSBfc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqIEBwYXJhbSB7c3RyaW5nPX0gcHJlZml4XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0VGl0bGUoIHRpdGxlOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nID0gdGhpcy5hcHBDb25maWcubmFtZSApIHtcblx0XHR0aGlzLl90aXRsZVNlcnZpY2Uuc2V0VGl0bGUoIHByZWZpeCArICcgLSAnICsgdGl0bGUgKTtcblx0XHR0aGlzLl90aXRsZUNoYW5nZSQubmV4dCggdGl0bGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fdGl0bGVTZXJ2aWNlLmdldFRpdGxlKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcblx0ICogQHBhcmFtIHtOYXZpZ2F0aW9uRXh0cmFzfSBleHRyYXNcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRDdXJyZW50VVJMKCBwYXRoOiBzdHJpbmcsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMgKSB7XG5cdFx0cGF0aFxuXHRcdFx0PyB0aGlzLl9zdG9yYWdlU2VydmljZS5zZXRMb2NhbCggdGhpcy5jYWNoZUtleSwgeyBwYXRoLCBleHRyYXMgfSApXG5cdFx0XHQ6IHRoaXMuX3N0b3JhZ2VTZXJ2aWNlLnJlbW92ZUxvY2FsKCB0aGlzLmNhY2hlS2V5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7UGFnZVVSTH1cblx0ICovXG5cdHB1YmxpYyBnZXRDdXJyZW50VVJMKCk6IFBhZ2VVUkwge1xuXHRcdHJldHVybiB0aGlzLl9zdG9yYWdlU2VydmljZS5nZXRMb2NhbCggdGhpcy5jYWNoZUtleSApIHx8IHsgcGF0aDogdGhpcy5hcHBDb25maWcubWFpblBhdGggfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG5hdmlnYXRlVG9DdXJyZW50VVJMKCkge1xuXHRcdGNvbnN0IHVybDogUGFnZVVSTCA9IHRoaXMuZ2V0Q3VycmVudFVSTCgpO1xuXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbIHVybC5wYXRoIF0sIHVybC5leHRyYXMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUHJvY2Vzc2luZ1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldFByb2Nlc3NpbmcoIGlzUHJvY2Vzc2luZzogYm9vbGVhbiApIHtcblx0XHRpc1Byb2Nlc3Npbmdcblx0XHRcdD8gdGhpcy5fcHJvY2Vzc0NoYW5nZSQubmV4dCggdHJ1ZSApXG5cdFx0XHQ6IHNldFRpbWVvdXQoICgpID0+IHRoaXMuX3Byb2Nlc3NDaGFuZ2UkLm5leHQoIGZhbHNlICksIDEwMDAgKTtcblx0fVxuXG59XG4iXX0=