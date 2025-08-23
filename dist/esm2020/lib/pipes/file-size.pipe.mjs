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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDekMsQ0FBQzs7d0VBVlcsWUFBWTs2RUFBWixZQUFZOztJQU92QixPQUFPLEVBQUU7Ozs7NkNBR1Q7dUZBVlcsWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVNsQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbGVTaXplJyB9KVxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5wdXRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNBZGRaZXJvXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaW5wdXQ6IG51bWJlciwgaXNBZGRaZXJvOiBib29sZWFuID0gZmFsc2UgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXy50b0ZpbGVTaXplKCBpbnB1dCwgaXNBZGRaZXJvICk7XG5cdH1cblxufVxuIl19