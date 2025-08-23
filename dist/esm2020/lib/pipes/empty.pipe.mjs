import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class EmptyPipe {
    /**
     * @param {any} value
     * @param {string=} emptyStr
     * @return {any}
     */
    transform(value, emptyStr = '––') {
        return !_.isNil(value) ? value : emptyStr;
    }
}
EmptyPipe.ɵfac = function EmptyPipe_Factory(t) { return new (t || EmptyPipe)(); };
EmptyPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "empty", type: EmptyPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], EmptyPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyPipe, [{
        type: Pipe,
        args: [{ name: 'empty' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZW1wdHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxLQUFXLEVBQUUsV0FBbUIsSUFBSTtRQUNyRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQzs7a0VBVlcsU0FBUzt1RUFBVCxTQUFTOztJQU9wQixPQUFPLEVBQUU7Ozs7MENBR1Q7dUZBVlcsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQVNmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnZW1wdHknIH0pXG5leHBvcnQgY2xhc3MgRW1wdHlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKiBAcGFyYW0ge3N0cmluZz19IGVtcHR5U3RyXG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggdmFsdWU/OiBhbnksIGVtcHR5U3RyOiBzdHJpbmcgPSAn4oCT4oCTJyApOiBhbnkge1xuXHRcdHJldHVybiAhXy5pc05pbCggdmFsdWUgKSA/IHZhbHVlIDogZW1wdHlTdHI7XG5cdH1cblxufVxuIl19