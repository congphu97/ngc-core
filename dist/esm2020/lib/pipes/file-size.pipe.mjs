import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class FileSizePipe {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input, isAddZero = false) {
        return _.toFileSize(input, isAddZero);
    }
}
FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
FileSizePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", String)
], FileSizePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDekMsQ0FBQzs7d0VBVlcsWUFBWTs2RUFBWixZQUFZO0FBUXhCO0lBREMsT0FBTyxFQUFFOzs7OzZDQUdUO3VGQVZXLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFTbEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWxlU2l6ZScgfSlcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlucHV0XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzQWRkWmVyb1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBudW1iZXIsIGlzQWRkWmVybzogYm9vbGVhbiA9IGZhbHNlICk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIF8udG9GaWxlU2l6ZSggaW5wdXQsIGlzQWRkWmVybyApO1xuXHR9XG5cbn1cbiJdfQ==