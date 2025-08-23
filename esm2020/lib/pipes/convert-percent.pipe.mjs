import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class ConvertPercentPipe {
    /**
     * @param {number} input
     * @param {number=} max
     * @param {number=} digits
     * @return {number}
     */
    transform(input, max = 100, digits = 2) {
        return _.toPercent(input, max, digits);
    }
}
ConvertPercentPipe.ɵfac = function ConvertPercentPipe_Factory(t) { return new (t || ConvertPercentPipe)(); };
ConvertPercentPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "convertPercent", type: ConvertPercentPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Number)
], ConvertPercentPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConvertPercentPipe, [{
        type: Pipe,
        args: [{ name: 'convertPercent' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC1wZXJjZW50LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2NvbnZlcnQtcGVyY2VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCOzs7OztPQUtHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxNQUFjLEdBQUcsRUFBRSxTQUFpQixDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQzFDLENBQUM7O29GQVhXLGtCQUFrQjt5RkFBbEIsa0JBQWtCOztJQVE3QixPQUFPLEVBQUU7Ozs7bURBR1Q7dUZBWFcsa0JBQWtCO2NBRDlCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQkFVeEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjb252ZXJ0UGVyY2VudCcgfSlcbmV4cG9ydCBjbGFzcyBDb252ZXJ0UGVyY2VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlucHV0XG5cdCAqIEBwYXJhbSB7bnVtYmVyPX0gbWF4XG5cdCAqIEBwYXJhbSB7bnVtYmVyPX0gZGlnaXRzXG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IG51bWJlciwgbWF4OiBudW1iZXIgPSAxMDAsIGRpZ2l0czogbnVtYmVyID0gMiApOiBudW1iZXIge1xuXHRcdHJldHVybiBfLnRvUGVyY2VudCggaW5wdXQsIG1heCwgZGlnaXRzICk7XG5cdH1cblxufVxuIl19