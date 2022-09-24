import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class UnitPipe {
    /**
     * @param {number} num
     * @param {string=} unit
     * @return {string}
     */
    transform(num, unit = 'px') {
        if (_.isNaN(num))
            return;
        return `${num}${unit}`;
    }
}
UnitPipe.ɵfac = function UnitPipe_Factory(t) { return new (t || UnitPipe)(); };
UnitPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "unit", type: UnitPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", String)
], UnitPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnitPipe, [{
        type: Pipe,
        args: [{ name: 'unit' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy91bml0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxRQUFRO0lBRXBCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsR0FBVyxFQUFFLE9BQWUsSUFBSTtRQUNqRCxJQUFLLENBQUMsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFO1lBQUcsT0FBTztRQUU3QixPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dFQVpXLFFBQVE7cUVBQVIsUUFBUTtBQVFwQjtJQURDLE9BQU8sRUFBRTs7Ozt5Q0FLVDt1RkFaVyxRQUFRO2NBRHBCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBU2QsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICd1bml0JyB9KVxuZXhwb3J0IGNsYXNzIFVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1cblx0ICogQHBhcmFtIHtzdHJpbmc9fSB1bml0XG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggbnVtOiBudW1iZXIsIHVuaXQ6IHN0cmluZyA9ICdweCcgKTogc3RyaW5nIHtcblx0XHRpZiAoIF8uaXNOYU4oIG51bSApICkgcmV0dXJuO1xuXG5cdFx0cmV0dXJuIGAke251bX0ke3VuaXR9YDtcblx0fVxuXG59XG4iXX0=