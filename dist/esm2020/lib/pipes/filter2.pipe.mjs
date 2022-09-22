import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class Filter2Pipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean=} diffComparison
     * @return {any[]}
     */
    transform(items, key, matchValue, diffComparison = false) {
        if (!items)
            return [];
        const hasMatchValue = arguments.length >= 3;
        const filteredItems = _.filter(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                const matched = _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
                return diffComparison ? !matched : matched;
            }
            return _.isNil(value);
        });
        const isDiff = !!_.difference(filteredItems, this._previous).length;
        if (isDiff) {
            this._previous = filteredItems;
            return filteredItems;
        }
        return this._previous;
    }
}
Filter2Pipe.ɵfac = function Filter2Pipe_Factory(t) { return new (t || Filter2Pipe)(); };
Filter2Pipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter2", type: Filter2Pipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Filter2Pipe, [{
        type: Pipe,
        args: [{ name: 'filter2', pure: false }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyMi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9maWx0ZXIyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUd2QixNQUFNLE9BQU8sV0FBVztJQUl2Qjs7Ozs7O09BTUc7SUFDSSxTQUFTLENBQUUsS0FBWSxFQUFFLEdBQVEsRUFBRSxVQUFlLEVBQUUsaUJBQTBCLEtBQUs7UUFDekYsSUFBSyxDQUFDLEtBQUs7WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUV4QixNQUFNLGFBQWEsR0FBWSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNyRCxNQUFNLGFBQWEsR0FBVSxDQUFDLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFO1lBQzdELE1BQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVuRCxJQUFLLGFBQWEsRUFBRztnQkFDcEIsTUFBTSxPQUFPLEdBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUU7b0JBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLFVBQVUsRUFBRSxLQUFLLENBQUU7b0JBQ2pDLENBQUMsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO2dCQUV4QixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMzQztZQUVELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN6QixDQUFDLENBQUUsQ0FBQztRQUNKLE1BQU0sTUFBTSxHQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsTUFBTSxDQUFDO1FBRS9FLElBQUssTUFBTSxFQUFHO1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFFL0IsT0FBTyxhQUFhLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7c0VBckNXLFdBQVc7MkVBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbHRlcjInLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlcjJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHJpdmF0ZSBfcHJldmlvdXM6IGFueVtdO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueVtdfSBpdGVtc1xuXHQgKiBAcGFyYW0ge2FueX0ga2V5XG5cdCAqIEBwYXJhbSB7YW55fSBtYXRjaFZhbHVlXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGRpZmZDb21wYXJpc29uXG5cdCAqIEByZXR1cm4ge2FueVtdfVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IGFueVtdLCBrZXk6IGFueSwgbWF0Y2hWYWx1ZTogYW55LCBkaWZmQ29tcGFyaXNvbjogYm9vbGVhbiA9IGZhbHNlICk6IGFueVtdIHtcblx0XHRpZiAoICFpdGVtcyApIHJldHVybiBbXTtcblxuXHRcdGNvbnN0IGhhc01hdGNoVmFsdWU6IGJvb2xlYW4gPSBhcmd1bWVudHMubGVuZ3RoID49IDM7XG5cdFx0Y29uc3QgZmlsdGVyZWRJdGVtczogYW55W10gPSBfLmZpbHRlciggaXRlbXMsICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IGtleSA/IF8uZ2V0KCBpdGVtLCBrZXkgKSA6IGl0ZW07XG5cblx0XHRcdGlmICggaGFzTWF0Y2hWYWx1ZSApIHtcblx0XHRcdFx0Y29uc3QgbWF0Y2hlZDogYm9vbGVhbiA9IF8uaXNBcnJheSggbWF0Y2hWYWx1ZSApXG5cdFx0XHRcdFx0PyBfLmluY2x1ZGVzKCBtYXRjaFZhbHVlLCB2YWx1ZSApXG5cdFx0XHRcdFx0OiBtYXRjaFZhbHVlID09PSB2YWx1ZTtcblxuXHRcdFx0XHRyZXR1cm4gZGlmZkNvbXBhcmlzb24gPyAhbWF0Y2hlZCA6IG1hdGNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfLmlzTmlsKCB2YWx1ZSApO1xuXHRcdH0gKTtcblx0XHRjb25zdCBpc0RpZmY6IGJvb2xlYW4gPSAhIV8uZGlmZmVyZW5jZSggZmlsdGVyZWRJdGVtcywgdGhpcy5fcHJldmlvdXMgKS5sZW5ndGg7XG5cblx0XHRpZiAoIGlzRGlmZiApIHtcblx0XHRcdHRoaXMuX3ByZXZpb3VzID0gZmlsdGVyZWRJdGVtcztcblxuXHRcdFx0cmV0dXJuIGZpbHRlcmVkSXRlbXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3ByZXZpb3VzO1xuXHR9XG5cbn1cbiJdfQ==