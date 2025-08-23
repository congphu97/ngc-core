import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class KUnitPipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toKUnit(input, isAddZero);
    }
}
KUnitPipe.ɵfac = function KUnitPipe_Factory(t) { return new (t || KUnitPipe)(); };
KUnitPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "kUnit", type: KUnitPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], KUnitPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KUnitPipe, [{
        type: Pipe,
        args: [{ name: 'kUnit' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiay11bml0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2stdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sU0FBUztJQUVyQjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDdEMsQ0FBQzs7a0VBVlcsU0FBUzt1RUFBVCxTQUFTOztJQU9wQixPQUFPLEVBQUU7Ozs7MENBR1Q7dUZBVlcsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQVNmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAna1VuaXQnIH0pXG5leHBvcnQgY2xhc3MgS1VuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnB1dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc0FkZFplcm9cblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogbnVtYmVyLCBpc0FkZFplcm86IGJvb2xlYW4gPSBmYWxzZSApOiBzdHJpbmcge1xuXHRcdHJldHVybiBfLnRvS1VuaXQoIGlucHV0LCBpc0FkZFplcm8gKTtcblx0fVxuXG59XG4iXX0=