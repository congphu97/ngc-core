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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2NvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sVUFBVTtJQUV0Qjs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEtBQWEsRUFBRSxZQUFxQixLQUFLO1FBQzFELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDdkMsQ0FBQzs7b0VBVlcsVUFBVTt5RUFBVixVQUFVOztJQU9yQixPQUFPLEVBQUU7Ozs7MkNBR1Q7dUZBVlcsVUFBVTtjQUR0QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQVNoQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2NvbW1hcycgfSlcbmV4cG9ydCBjbGFzcyBDb21tYXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnB1dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc0FkZFplcm9cblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogbnVtYmVyLCBpc0FkZFplcm86IGJvb2xlYW4gPSBmYWxzZSApOiBzdHJpbmcge1xuXHRcdHJldHVybiBfLnRvQ29tbWFzKCBpbnB1dCwgaXNBZGRaZXJvICk7XG5cdH1cblxufVxuIl19