import { Injectable, Optional, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import moment from 'moment-timezone';
import vi from 'moment/locale/vi';
import _ from 'lodash';
import { APP_CONFIG, AppConfig } from '../injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../injection-token";
moment.updateLocale('vi', {
    ...vi,
    months: _.split('Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12', '_'),
    weekdays: _.split('Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy', '_'),
});
export class LocaleService {
    /**
     * @constructor
     * @param {AppConfig} appConfig
     * @param {TranslateService} _translateService
     */
    constructor(appConfig, _translateService) {
        this.appConfig = appConfig;
        this._translateService = _translateService;
        this.localeChange$ = new ReplaySubject();
    }
    /**
     * @param {string} locale
     * @return {void}
     */
    set locale(locale) {
        if (!locale)
            return;
        this._locale = locale;
        // Store locale
        localStorage.setItem('locale', locale.toString());
        // Set moment language
        moment.locale(locale);
        // The lang to use, if the lang isn't available, it will use the current loader to get them
        this._translateService.use(_.toLower(locale.substring(0, 2)))
            .pipe(take(1))
            .subscribe();
        // Trigger locale changed
        this.localeChange$.next(locale);
    }
    /**
     * @return {string}
     */
    get locale() {
        return this._locale || localStorage.getItem('locale') || this.appConfig.locale;
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(i0.ɵɵinject(APP_CONFIG, 8), i0.ɵɵinject(i1.TranslateService)); };
LocaleService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocaleService, factory: LocaleService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocaleService, [{
        type: Injectable
    }], function () { return [{ type: i2.AppConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUUzRCxNQUFNLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRTtJQUMxQixHQUFHLEVBQUU7SUFDTCxNQUFNLEVBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBRSxvR0FBb0csRUFBRSxHQUFHLENBQUU7SUFDN0gsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUUsd0RBQXdELEVBQUUsR0FBRyxDQUFFO0NBQ2xGLENBQUUsQ0FBQztBQUdKLE1BQU0sT0FBTyxhQUFhO0lBcUN6Qjs7OztPQUlHO0lBQ0gsWUFDbUQsU0FBb0IsRUFDOUQsaUJBQW1DO1FBRE8sY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM5RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBMUNyQyxrQkFBYSxHQUEwQixJQUFJLGFBQWEsRUFBVSxDQUFDO0lBMkN2RSxDQUFDO0lBdkNKOzs7T0FHRztJQUNILElBQUksTUFBTSxDQUFFLE1BQWM7UUFDekIsSUFBSyxDQUFDLE1BQU07WUFBRyxPQUFPO1FBRXRCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLGVBQWU7UUFDZixZQUFZLENBQUMsT0FBTyxDQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztRQUVwRCxzQkFBc0I7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUV4QiwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUU7YUFDbEUsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBRTthQUNqQixTQUFTLEVBQUUsQ0FBQztRQUViLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNsRixDQUFDOzswRUFuQ1csYUFBYSxjQTJDSCxVQUFVO21FQTNDcEIsYUFBYSxXQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVOztzQkE0Q1IsUUFBUTs7c0JBQUksTUFBTTt1QkFBRSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCB2aSBmcm9tICdtb21lbnQvbG9jYWxlL3ZpJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEFQUF9DT05GSUcsIEFwcENvbmZpZyB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbic7XG5cbm1vbWVudC51cGRhdGVMb2NhbGUoICd2aScsIHtcblx0Li4udmksXG5cdG1vbnRoc1x0OiBfLnNwbGl0KCAnVGjDoW5nIDFfVGjDoW5nIDJfVGjDoW5nIDNfVGjDoW5nIDRfVGjDoW5nIDVfVGjDoW5nIDZfVGjDoW5nIDdfVGjDoW5nIDhfVGjDoW5nIDlfVGjDoW5nIDEwX1Row6FuZyAxMV9UaMOhbmcgMTInLCAnXycgKSxcblx0d2Vla2RheXM6IF8uc3BsaXQoICdDaOG7pyBuaOG6rXRfVGjhu6kgaGFpX1Ro4bupIGJhX1Ro4bupIHTGsF9UaOG7qSBuxINtX1Ro4bupIHPDoXVfVGjhu6kgYuG6o3knLCAnXycgKSxcbn0gKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsZVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBsb2NhbGVDaGFuZ2UkOiBSZXBsYXlTdWJqZWN0PHN0cmluZz4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHNldCBsb2NhbGUoIGxvY2FsZTogc3RyaW5nICkge1xuXHRcdGlmICggIWxvY2FsZSApIHJldHVybjtcblxuXHRcdHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcblxuXHRcdC8vIFN0b3JlIGxvY2FsZVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnbG9jYWxlJywgbG9jYWxlLnRvU3RyaW5nKCkgKTtcblxuXHRcdC8vIFNldCBtb21lbnQgbGFuZ3VhZ2Vcblx0XHRtb21lbnQubG9jYWxlKCBsb2NhbGUgKTtcblxuXHRcdC8vIFRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cblx0XHR0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLnVzZSggXy50b0xvd2VyKCBsb2NhbGUuc3Vic3RyaW5nKCAwLCAyICkgKSApXG5cdFx0LnBpcGUoIHRha2UoIDEgKSApXG5cdFx0LnN1YnNjcmliZSgpO1xuXG5cdFx0Ly8gVHJpZ2dlciBsb2NhbGUgY2hhbmdlZFxuXHRcdHRoaXMubG9jYWxlQ2hhbmdlJC5uZXh0KCBsb2NhbGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsZSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ2xvY2FsZScgKSB8fCB0aGlzLmFwcENvbmZpZy5sb2NhbGU7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7QXBwQ29uZmlnfSBhcHBDb25maWdcblx0ICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBfdHJhbnNsYXRlU2VydmljZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggQVBQX0NPTkZJRyApIHB1YmxpYyByZWFkb25seSBhcHBDb25maWc6IEFwcENvbmZpZyxcblx0XHRwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge31cblxufVxuIl19