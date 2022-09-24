import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class IsFinitePipe {
    /**
     * @param {number} num
     * @return {boolean}
     */
    transform(num) {
        return _.isFinite(num);
    }
}
IsFinitePipe.ɵfac = function IsFinitePipe_Factory(t) { return new (t || IsFinitePipe)(); };
IsFinitePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "isFinite", type: IsFinitePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], IsFinitePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsFinitePipe, [{
        type: Pipe,
        args: [{ name: 'isFinite' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZmluaXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2lzLWZpbml0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7O09BR0c7SUFFSSxTQUFTLENBQUUsR0FBVztRQUM1QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDMUIsQ0FBQzs7d0VBVFcsWUFBWTs2RUFBWixZQUFZO0FBT3hCO0lBREMsT0FBTyxFQUFFOzs7OzZDQUdUO3VGQVRXLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFRbEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdpc0Zpbml0ZScgfSlcbmV4cG9ydCBjbGFzcyBJc0Zpbml0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBudW06IG51bWJlciApOiBib29sZWFuIHtcblx0XHRyZXR1cm4gXy5pc0Zpbml0ZSggbnVtICk7XG5cdH1cblxufVxuIl19