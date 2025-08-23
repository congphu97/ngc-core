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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZml4ZWQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxLQUFhLEVBQUUsU0FBaUIsQ0FBQztRQUNsRCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ25DLENBQUM7O2tFQVZXLFNBQVM7dUVBQVQsU0FBUzs7SUFPcEIsT0FBTyxFQUFFOzs7OzBDQUdUO3VGQVZXLFNBQVM7Y0FEckIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFTZixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpeGVkJyB9KVxuZXhwb3J0IGNsYXNzIEZpeGVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5wdXRcblx0ICogQHBhcmFtIHtudW1iZXI9fSBkaWdpdHNcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogbnVtYmVyLCBkaWdpdHM6IG51bWJlciA9IDIgKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gXy50b0ZpeGVkKCBpbnB1dCwgZGlnaXRzICk7XG5cdH1cblxufVxuIl19