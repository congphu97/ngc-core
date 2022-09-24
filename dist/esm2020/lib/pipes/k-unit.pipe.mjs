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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiay11bml0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2stdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sU0FBUztJQUVyQjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDdEMsQ0FBQzs7a0VBVlcsU0FBUzt1RUFBVCxTQUFTO0FBUXJCO0lBREMsT0FBTyxFQUFFOzs7OzBDQUdUO3VGQVZXLFNBQVM7Y0FEckIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFTZixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2tVbml0JyB9KVxuZXhwb3J0IGNsYXNzIEtVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5wdXRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNBZGRaZXJvXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IG51bWJlciwgaXNBZGRaZXJvOiBib29sZWFuID0gZmFsc2UgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXy50b0tVbml0KCBpbnB1dCwgaXNBZGRaZXJvICk7XG5cdH1cblxufVxuIl19