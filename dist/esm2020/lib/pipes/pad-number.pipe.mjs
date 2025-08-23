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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9wYWQtbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxhQUFhO0lBRXpCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsS0FBYSxFQUFFLElBQVk7UUFDNUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUUsQ0FBQztJQUNyQyxDQUFDOzswRUFWVyxhQUFhOytFQUFiLGFBQWE7O0lBT3hCLE9BQU8sRUFBRTs7Ozs4Q0FHVDt1RkFWVyxhQUFhO2NBRHpCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBU25CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAncGFkTnVtYmVyJyB9KVxuZXhwb3J0IGNsYXNzIFBhZE51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlucHV0XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2l6ZVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBudW1iZXIsIHNpemU6IG51bWJlciApOiBzdHJpbmcge1xuXHRcdHJldHVybiBfLnRvUGFkTnVtYmVyKCBpbnB1dCwgc2l6ZSApO1xuXHR9XG5cbn1cbiJdfQ==