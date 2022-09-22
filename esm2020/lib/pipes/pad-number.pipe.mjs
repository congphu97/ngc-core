import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class PadNumberPipe {
    /**
     * @param {number} input
     * @param {boolean} size
     * @return {string}
     */
    transform(input, size) {
        return _.toPadNumber(input, size);
    }
}
PadNumberPipe.ɵfac = function PadNumberPipe_Factory(t) { return new (t || PadNumberPipe)(); };
PadNumberPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "padNumber", type: PadNumberPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", String)
], PadNumberPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PadNumberPipe, [{
        type: Pipe,
        args: [{ name: 'padNumber' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9wYWQtbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxhQUFhO0lBRXpCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsS0FBYSxFQUFFLElBQVk7UUFDNUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNyQyxDQUFDOzswRUFWVyxhQUFhOytFQUFiLGFBQWE7QUFRekI7SUFEQyxPQUFPLEVBQUU7Ozs7OENBR1Q7dUZBVlcsYUFBYTtjQUR6QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQVNuQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3BhZE51bWJlcicgfSlcbmV4cG9ydCBjbGFzcyBQYWROdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnB1dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpemVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBpbnB1dDogbnVtYmVyLCBzaXplOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXy50b1BhZE51bWJlciggaW5wdXQsIHNpemUgKTtcblx0fVxuXG59XG4iXX0=