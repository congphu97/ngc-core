import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class FixedPipe {
    /**
     * @param {number} input
     * @param {number=} digits
     * @return {number}
     */
    transform(input, digits = 2) {
        return _.toFixed(input, digits);
    }
}
FixedPipe.ɵfac = function FixedPipe_Factory(t) { return new (t || FixedPipe)(); };
FixedPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "fixed", type: FixedPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], FixedPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FixedPipe, [{
        type: Pipe,
        args: [{ name: 'fixed' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZml4ZWQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxLQUFhLEVBQUUsU0FBaUIsQ0FBQztRQUNsRCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ25DLENBQUM7O2tFQVZXLFNBQVM7dUVBQVQsU0FBUztBQVFyQjtJQURDLE9BQU8sRUFBRTs7OzswQ0FHVDt1RkFWVyxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Z0JBU2YsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaXhlZCcgfSlcbmV4cG9ydCBjbGFzcyBGaXhlZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlucHV0XG5cdCAqIEBwYXJhbSB7bnVtYmVyPX0gZGlnaXRzXG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IG51bWJlciwgZGlnaXRzOiBudW1iZXIgPSAyICk6IG51bWJlciB7XG5cdFx0cmV0dXJuIF8udG9GaXhlZCggaW5wdXQsIGRpZ2l0cyApO1xuXHR9XG5cbn1cbiJdfQ==