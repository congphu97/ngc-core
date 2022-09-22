import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class HourMeridiemPipe {
    /**
     * @param {number} hour
     * @return {string}
     */
    transform(hour) {
        return !_.isNil(hour) ? moment().hour(hour).format('hh A') : undefined;
    }
}
HourMeridiemPipe.ɵfac = function HourMeridiemPipe_Factory(t) { return new (t || HourMeridiemPipe)(); };
HourMeridiemPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "hourMeridiem", type: HourMeridiemPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], HourMeridiemPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HourMeridiemPipe, [{
        type: Pipe,
        args: [{ name: 'hourMeridiem' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1tZXJpZGllbS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9ob3VyLW1lcmlkaWVtLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxnQkFBZ0I7SUFFNUI7OztPQUdHO0lBRUksU0FBUyxDQUFFLElBQVk7UUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDOztnRkFUVyxnQkFBZ0I7cUZBQWhCLGdCQUFnQjtBQU81QjtJQURDLE9BQU8sRUFBRTs7OztpREFHVDt1RkFUVyxnQkFBZ0I7Y0FENUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtnQkFRdEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdob3VyTWVyaWRpZW0nIH0pXG5leHBvcnQgY2xhc3MgSG91ck1lcmlkaWVtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaG91clxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGhvdXI6IG51bWJlciApOiBzdHJpbmcge1xuXHRcdHJldHVybiAhXy5pc05pbCggaG91ciApID8gbW9tZW50KCkuaG91ciggaG91ciApLmZvcm1hdCggJ2hoIEEnICkgOiB1bmRlZmluZWQ7XG5cdH1cblxufVxuIl19