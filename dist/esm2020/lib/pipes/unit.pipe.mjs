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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy91bml0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxRQUFRO0lBRXBCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsR0FBVyxFQUFFLE9BQWUsSUFBSTtRQUNqRCxJQUFLLENBQUMsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFO1lBQUcsT0FBTztRQUU3QixPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dFQVpXLFFBQVE7cUVBQVIsUUFBUTs7SUFPbkIsT0FBTyxFQUFFOzs7O3lDQUtUO3VGQVpXLFFBQVE7Y0FEcEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtnQkFTZCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3VuaXQnIH0pXG5leHBvcnQgY2xhc3MgVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bVxuXHQgKiBAcGFyYW0ge3N0cmluZz19IHVuaXRcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBudW06IG51bWJlciwgdW5pdDogc3RyaW5nID0gJ3B4JyApOiBzdHJpbmcge1xuXHRcdGlmICggXy5pc05hTiggbnVtICkgKSByZXR1cm47XG5cblx0XHRyZXR1cm4gYCR7bnVtfSR7dW5pdH1gO1xuXHR9XG5cbn1cbiJdfQ==