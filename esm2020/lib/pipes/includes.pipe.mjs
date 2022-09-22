import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class IncludesPipe {
    /**
     * @param {any[]} arr
     * @param {any} item
     * @return {boolean}
     */
    transform(arr, item) {
        return _.includes(arr, item);
    }
}
IncludesPipe.ɵfac = function IncludesPipe_Factory(t) { return new (t || IncludesPipe)(); };
IncludesPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "includes", type: IncludesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IncludesPipe, [{
        type: Pipe,
        args: [{ name: 'includes' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvaW5jbHVkZXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBR3ZCLE1BQU0sT0FBTyxZQUFZO0lBRXhCOzs7O09BSUc7SUFDSSxTQUFTLENBQUUsR0FBVSxFQUFFLElBQVM7UUFDdEMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNoQyxDQUFDOzt3RUFUVyxZQUFZOzZFQUFaLFlBQVk7dUZBQVosWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuQFBpcGUoeyBuYW1lOiAnaW5jbHVkZXMnIH0pXG5leHBvcnQgY2xhc3MgSW5jbHVkZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55W119IGFyclxuXHQgKiBAcGFyYW0ge2FueX0gaXRlbVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggYXJyOiBhbnlbXSwgaXRlbTogYW55ICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBfLmluY2x1ZGVzKCBhcnIsIGl0ZW0gKTtcblx0fVxuXG59XG4iXX0=