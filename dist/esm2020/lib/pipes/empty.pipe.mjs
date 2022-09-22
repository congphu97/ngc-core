import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class EmptyPipe {
    /**
     * @param {any} value
     * @param {string=} emptyStr
     * @return {any}
     */
    transform(value, emptyStr = '––') {
        return !_.isNil(value) ? value : emptyStr;
    }
}
EmptyPipe.ɵfac = function EmptyPipe_Factory(t) { return new (t || EmptyPipe)(); };
EmptyPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "empty", type: EmptyPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], EmptyPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyPipe, [{
        type: Pipe,
        args: [{ name: 'empty' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZW1wdHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxLQUFXLEVBQUUsV0FBbUIsSUFBSTtRQUNyRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQzs7a0VBVlcsU0FBUzt1RUFBVCxTQUFTO0FBUXJCO0lBREMsT0FBTyxFQUFFOzs7OzBDQUdUO3VGQVZXLFNBQVM7Y0FEckIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFTZixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2VtcHR5JyB9KVxuZXhwb3J0IGNsYXNzIEVtcHR5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gdmFsdWVcblx0ICogQHBhcmFtIHtzdHJpbmc9fSBlbXB0eVN0clxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHZhbHVlPzogYW55LCBlbXB0eVN0cjogc3RyaW5nID0gJ+KAk+KAkycgKTogYW55IHtcblx0XHRyZXR1cm4gIV8uaXNOaWwoIHZhbHVlICkgPyB2YWx1ZSA6IGVtcHR5U3RyO1xuXHR9XG5cbn1cbiJdfQ==