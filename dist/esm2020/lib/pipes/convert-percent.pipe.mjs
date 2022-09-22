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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC1wZXJjZW50LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2NvbnZlcnQtcGVyY2VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCOzs7OztPQUtHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxNQUFjLEdBQUcsRUFBRSxTQUFpQixDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQzFDLENBQUM7O29GQVhXLGtCQUFrQjt5RkFBbEIsa0JBQWtCO0FBUzlCO0lBREMsT0FBTyxFQUFFOzs7O21EQUdUO3VGQVhXLGtCQUFrQjtjQUQ5QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBVXhCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnY29udmVydFBlcmNlbnQnIH0pXG5leHBvcnQgY2xhc3MgQ29udmVydFBlcmNlbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnB1dFxuXHQgKiBAcGFyYW0ge251bWJlcj19IG1heFxuXHQgKiBAcGFyYW0ge251bWJlcj19IGRpZ2l0c1xuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBudW1iZXIsIG1heDogbnVtYmVyID0gMTAwLCBkaWdpdHM6IG51bWJlciA9IDIgKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gXy50b1BlcmNlbnQoIGlucHV0LCBtYXgsIGRpZ2l0cyApO1xuXHR9XG5cbn1cbiJdfQ==