import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class FilterPipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @param {boolean} diffComparison
     * @return {any[]}
     */
    transform(items, key, matchValue, diffComparison = false) {
        if (!items)
            return [];
        const hasMatchValue = arguments.length >= 3;
        return _.filter(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                const matched = _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
                return diffComparison ? !matched : matched;
            }
            return _.isNil(value);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{ name: 'filter', pure: false }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLFVBQVU7SUFFdEI7Ozs7OztPQU1HO0lBQ0ksU0FBUyxDQUFFLEtBQVksRUFBRSxHQUFRLEVBQUUsVUFBZSxFQUFFLGlCQUEwQixLQUFLO1FBQ3pGLElBQUssQ0FBQyxLQUFLO1lBQUcsT0FBTyxFQUFFLENBQUM7UUFFeEIsTUFBTSxhQUFhLEdBQVksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFFckQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFO1lBQ3ZDLE1BQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVuRCxJQUFLLGFBQWEsRUFBRztnQkFDcEIsTUFBTSxPQUFPLEdBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUU7b0JBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLFVBQVUsRUFBRSxLQUFLLENBQUU7b0JBQ2pDLENBQUMsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO2dCQUV4QixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMzQztZQUVELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN6QixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7O29FQTNCVyxVQUFVO3lFQUFWLFVBQVU7dUZBQVYsVUFBVTtjQUR0QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHthbnlbXX0gaXRlbXNcblx0ICogQHBhcmFtIHthbnl9IGtleVxuXHQgKiBAcGFyYW0ge2FueX0gbWF0Y2hWYWx1ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGRpZmZDb21wYXJpc29uXG5cdCAqIEByZXR1cm4ge2FueVtdfVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IGFueVtdLCBrZXk6IGFueSwgbWF0Y2hWYWx1ZTogYW55LCBkaWZmQ29tcGFyaXNvbjogYm9vbGVhbiA9IGZhbHNlICk6IGFueVtdIHtcblx0XHRpZiAoICFpdGVtcyApIHJldHVybiBbXTtcblxuXHRcdGNvbnN0IGhhc01hdGNoVmFsdWU6IGJvb2xlYW4gPSBhcmd1bWVudHMubGVuZ3RoID49IDM7XG5cblx0XHRyZXR1cm4gXy5maWx0ZXIoIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlOiBhbnkgPSBrZXkgPyBfLmdldCggaXRlbSwga2V5ICkgOiBpdGVtO1xuXG5cdFx0XHRpZiAoIGhhc01hdGNoVmFsdWUgKSB7XG5cdFx0XHRcdGNvbnN0IG1hdGNoZWQ6IGJvb2xlYW4gPSBfLmlzQXJyYXkoIG1hdGNoVmFsdWUgKVxuXHRcdFx0XHRcdD8gXy5pbmNsdWRlcyggbWF0Y2hWYWx1ZSwgdmFsdWUgKVxuXHRcdFx0XHRcdDogbWF0Y2hWYWx1ZSA9PT0gdmFsdWU7XG5cblx0XHRcdFx0cmV0dXJuIGRpZmZDb21wYXJpc29uID8gIW1hdGNoZWQgOiBtYXRjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gXy5pc05pbCggdmFsdWUgKTtcblx0XHR9ICk7XG5cdH1cblxufVxuIl19