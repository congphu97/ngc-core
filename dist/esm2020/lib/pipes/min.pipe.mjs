import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class MinPipe {
    /**
     * @param {any[]} items
     * @param {string} field
     * @return {number}
     */
    transform(items, field) {
        const min = _.minBy(items, field);
        return min && min[field] ? min[field] : 0;
    }
}
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{ name: 'min' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL21pbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLE9BQU87SUFFbkI7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBRSxLQUFZLEVBQUUsS0FBYTtRQUM1QyxNQUFNLEdBQUcsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztRQUV6QyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OzhEQVhXLE9BQU87bUVBQVAsT0FBTzt1RkFBUCxPQUFPO2NBRG5CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AUGlwZSh7IG5hbWU6ICdtaW4nIH0pXG5leHBvcnQgY2xhc3MgTWluUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueVtdfSBpdGVtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHVibGljIHRyYW5zZm9ybSggaXRlbXM6IGFueVtdLCBmaWVsZDogc3RyaW5nICk6IG51bWJlciB7XG5cdFx0Y29uc3QgbWluOiBhbnkgPSBfLm1pbkJ5KCBpdGVtcywgZmllbGQgKTtcblxuXHRcdHJldHVybiBtaW4gJiYgbWluWyBmaWVsZCBdID8gbWluWyBmaWVsZCBdIDogMDtcblx0fVxuXG59XG4iXX0=