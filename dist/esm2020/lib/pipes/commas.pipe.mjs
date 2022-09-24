import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class CommasPipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toCommas(input, isAddZero);
    }
}
CommasPipe.ɵfac = function CommasPipe_Factory(t) { return new (t || CommasPipe)(); };
CommasPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "commas", type: CommasPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], CommasPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommasPipe, [{
        type: Pipe,
        args: [{ name: 'commas' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2NvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sVUFBVTtJQUV0Qjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDdkMsQ0FBQzs7b0VBVlcsVUFBVTt5RUFBVixVQUFVO0FBUXRCO0lBREMsT0FBTyxFQUFFOzs7OzJDQUdUO3VGQVZXLFVBQVU7Y0FEdEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFTaEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjb21tYXMnIH0pXG5leHBvcnQgY2xhc3MgQ29tbWFzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5wdXRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNBZGRaZXJvXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IG51bWJlciwgaXNBZGRaZXJvOiBib29sZWFuID0gZmFsc2UgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXy50b0NvbW1hcyggaW5wdXQsIGlzQWRkWmVybyApO1xuXHR9XG5cbn1cbiJdfQ==