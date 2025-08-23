import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeHtmlPipe {
    /**
     * @constructor
     * @param {DomSanitizer} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {string} value
     * @return {SafeHtml}
     */
    transform(value) {
        return value ? this._sanitizer.bypassSecurityTrustHtml(value) : '';
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], SafeHtmlPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFHaEQsTUFBTSxPQUFPLFlBQVk7SUFFeEI7OztPQUdHO0lBQ0gsWUFBcUIsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUFJLENBQUM7SUFFbEQ7OztPQUdHO0lBRUksU0FBUyxDQUFFLEtBQWE7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzt3RUFmVyxZQUFZOzZFQUFaLFlBQVk7O0lBWXZCLE9BQU8sRUFBRTs7Ozs2Q0FHVDt1RkFmVyxZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7K0RBY2xCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdzYWZlSHRtbCcgfSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RG9tU2FuaXRpemVyfSBfc2FuaXRpemVyXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIgKSB7fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHJldHVybiB7U2FmZUh0bWx9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHZhbHVlOiBzdHJpbmcgKTogU2FmZUh0bWwge1xuXHRcdHJldHVybiB2YWx1ZSA/IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCggdmFsdWUgKSA6ICcnO1xuXHR9XG5cbn1cbiJdfQ==