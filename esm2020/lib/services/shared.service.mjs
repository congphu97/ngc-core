import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SharedService {
    constructor() {
        this.dataChange$ = new BehaviorSubject(undefined);
        this.namespaceDataChange$ = {};
        this._data = {};
    }
    /**
     * @param {string} name
     * @param {any} data
     * @return {void}
     */
    setData(name, data) {
        this._data[name] = data;
        if (!this.namespaceDataChange$[name])
            this.namespaceDataChange$[name] = new BehaviorSubject(undefined);
        this.dataChange$.next(this._data);
        this.namespaceDataChange$[name].next(this._data[name]);
    }
    /**
     * @param {string} name
     * @return {any}
     */
    getData(name) {
        return this._data[name];
    }
    /**
     * @param {string} name
     * @return {void}
     */
    removeData(name) {
        delete this._data[name];
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SharedService, factory: SharedService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NoYXJlZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFHUSxnQkFBVyxHQUF5QixJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUUsQ0FBQztRQUMxRSx5QkFBb0IsR0FBOEMsRUFBRSxDQUFDO1FBRXBFLFVBQUssR0FBUSxFQUFFLENBQUM7S0FnQ3hCO0lBOUJBOzs7O09BSUc7SUFDSSxPQUFPLENBQUUsSUFBWSxFQUFFLElBQVM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBRSxJQUFJLENBQUU7WUFBRyxJQUFJLENBQUMsb0JBQW9CLENBQUUsSUFBSSxDQUFFLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFFLENBQUM7UUFFcEgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBRSxDQUFDO0lBQzlELENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPLENBQUUsSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBRSxJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUMzQixDQUFDOzswRUFuQ1csYUFBYTttRUFBYixhQUFhLFdBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBkYXRhQ2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oIHVuZGVmaW5lZCApO1xuXHRwdWJsaWMgbmFtZXNwYWNlRGF0YUNoYW5nZSQ6IHsgWyBrZXk6IHN0cmluZyBdOiBCZWhhdmlvclN1YmplY3Q8YW55PiB9ID0ge307XG5cblx0cHJpdmF0ZSBfZGF0YTogYW55ID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0RGF0YSggbmFtZTogc3RyaW5nLCBkYXRhOiBhbnkgKSB7XG5cdFx0dGhpcy5fZGF0YVsgbmFtZSBdID0gZGF0YTtcblxuXHRcdGlmICggIXRoaXMubmFtZXNwYWNlRGF0YUNoYW5nZSRbIG5hbWUgXSApIHRoaXMubmFtZXNwYWNlRGF0YUNoYW5nZSRbIG5hbWUgXSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PiggdW5kZWZpbmVkICk7XG5cblx0XHR0aGlzLmRhdGFDaGFuZ2UkLm5leHQoIHRoaXMuX2RhdGEgKTtcblx0XHR0aGlzLm5hbWVzcGFjZURhdGFDaGFuZ2UkWyBuYW1lIF0ubmV4dCggdGhpcy5fZGF0YVsgbmFtZSBdICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIGdldERhdGEoIG5hbWU6IHN0cmluZyApOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9kYXRhWyBuYW1lIF07XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyByZW1vdmVEYXRhKCBuYW1lOiBzdHJpbmcgKSB7XG5cdFx0ZGVsZXRlIHRoaXMuX2RhdGFbIG5hbWUgXTtcblx0fVxuXG59XG4iXX0=