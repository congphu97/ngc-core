import { __decorate, __metadata } from "tslib";
import { forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
export class MultiTranslateHttpLoader {
    /**
     * @constructor
     * @param {{prefix: string, suffix: string }[]} resources
     * @param {HttpClient} _http
     */
    constructor(resources = [{ prefix: 'assets/i18n/', suffix: '.json' }], _http) {
        this.resources = resources;
        this._http = _http;
    }
    /**
     * @param {string} lang
     * @return {Observable<Record<string, unknown>>}
     */
    getTranslation(lang) {
        return forkJoin(_.map(this.resources, (config) => this._http.get(`${config.prefix}${lang}${config.suffix}`)))
            .pipe(take(1), map((response) => _.reduce(response, (a, b) => _.assign(a, b))));
    }
}
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], MultiTranslateHttpLoader.prototype, "getTranslation", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdHJhbnNsYXRlLWh0dHAtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9sb2FkZXJzL211bHRpLXRyYW5zbGF0ZS1odHRwLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE1BQU0sT0FBTyx3QkFBd0I7SUFFcEM7Ozs7T0FJRztJQUNILFlBQ1EsWUFBa0QsQ0FBQyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQzlGLEtBQWlCO1FBRGxCLGNBQVMsR0FBVCxTQUFTLENBQXNGO1FBQzlGLFVBQUssR0FBTCxLQUFLLENBQVk7SUFDdkIsQ0FBQztJQUVKOzs7T0FHRztJQUVJLGNBQWMsQ0FBRSxJQUFZO1FBQ2xDLE9BQU8sUUFBUSxDQUNkLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLE1BQVcsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBRSxDQUN2RzthQUNBLElBQUksQ0FDSixJQUFJLENBQUUsQ0FBQyxDQUFFLEVBQ1QsR0FBRyxDQUFFLENBQUUsUUFBYSxFQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLFFBQVEsRUFBRSxDQUFFLENBQU0sRUFBRSxDQUFNLEVBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FDeEYsQ0FBQztJQUNILENBQUM7Q0FFRDtBQVZBO0lBREMsT0FBTyxFQUFFOzs7b0NBQzZCLFVBQVU7OERBUWhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIGltcGxlbWVudHMgVHJhbnNsYXRlTG9hZGVyIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7e3ByZWZpeDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9W119IHJlc291cmNlc1xuXHQgKiBAcGFyYW0ge0h0dHBDbGllbnR9IF9odHRwXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVzb3VyY2VzOiB7IHByZWZpeDogc3RyaW5nOyBzdWZmaXg6IHN0cmluZyB9W10gPSBbeyBwcmVmaXg6ICdhc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfV0sXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudFxuXHQpIHt9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nXG5cdCAqIEByZXR1cm4ge09ic2VydmFibGU8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+fVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24oIGxhbmc6IHN0cmluZyApOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG5cdFx0cmV0dXJuIGZvcmtKb2luKFxuXHRcdFx0Xy5tYXAoIHRoaXMucmVzb3VyY2VzLCAoIGNvbmZpZzogYW55ICkgPT4gdGhpcy5faHR0cC5nZXQoIGAke2NvbmZpZy5wcmVmaXh9JHtsYW5nfSR7Y29uZmlnLnN1ZmZpeH1gICkgKVxuXHRcdClcblx0XHQucGlwZShcblx0XHRcdHRha2UoIDEgKSxcblx0XHRcdG1hcCggKCByZXNwb25zZTogYW55ICkgPT4gXy5yZWR1Y2UoIHJlc3BvbnNlLCAoIGE6IGFueSwgYjogYW55ICkgPT4gXy5hc3NpZ24oIGEsIGIgKSApIClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==