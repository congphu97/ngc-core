import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class FindPipe {
    /**
     * @param {any[]} items
     * @param {any} key
     * @param {any} matchValue
     * @return {any}
     */
    transform(items, key, matchValue) {
        if (!items)
            return;
        const hasMatchValue = arguments.length === 3;
        return _.find(items, (item) => {
            const value = key ? _.get(item, key) : item;
            if (hasMatchValue) {
                return _.isArray(matchValue)
                    ? _.includes(matchValue, value)
                    : matchValue === value;
            }
            return _.isNil(value);
        });
    }
}
FindPipe.ɵfac = function FindPipe_Factory(t) { return new (t || FindPipe)(); };
FindPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "find", type: FindPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FindPipe, [{
        type: Pipe,
        args: [{ name: 'find', pure: false }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9maW5kLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUd2QixNQUFNLE9BQU8sUUFBUTtJQUVwQjs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBRSxLQUFZLEVBQUUsR0FBUSxFQUFFLFVBQWU7UUFDeEQsSUFBSyxDQUFDLEtBQUs7WUFBRyxPQUFPO1FBRXJCLE1BQU0sYUFBYSxHQUFZLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsQ0FBRSxJQUFTLEVBQUcsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFbkQsSUFBSyxhQUFhLEVBQUc7Z0JBQ3BCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUU7b0JBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLFVBQVUsRUFBRSxLQUFLLENBQUU7b0JBQ2pDLENBQUMsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7Z0VBeEJXLFFBQVE7cUVBQVIsUUFBUTt1RkFBUixRQUFRO2NBRHBCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbmQnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEZpbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55W119IGl0ZW1zXG5cdCAqIEBwYXJhbSB7YW55fSBrZXlcblx0ICogQHBhcmFtIHthbnl9IG1hdGNoVmFsdWVcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IGFueVtdLCBrZXk6IGFueSwgbWF0Y2hWYWx1ZTogYW55ICk6IGFueSB7XG5cdFx0aWYgKCAhaXRlbXMgKSByZXR1cm47XG5cblx0XHRjb25zdCBoYXNNYXRjaFZhbHVlOiBib29sZWFuID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMztcblxuXHRcdHJldHVybiBfLmZpbmQoIGl0ZW1zLCAoIGl0ZW06IGFueSApID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlOiBhbnkgPSBrZXkgPyBfLmdldCggaXRlbSwga2V5ICkgOiBpdGVtO1xuXG5cdFx0XHRpZiAoIGhhc01hdGNoVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBfLmlzQXJyYXkoIG1hdGNoVmFsdWUgKVxuXHRcdFx0XHRcdD8gXy5pbmNsdWRlcyggbWF0Y2hWYWx1ZSwgdmFsdWUgKVxuXHRcdFx0XHRcdDogbWF0Y2hWYWx1ZSA9PT0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfLmlzTmlsKCB2YWx1ZSApO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=