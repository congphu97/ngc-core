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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFHaEQsTUFBTSxPQUFPLFlBQVk7SUFFeEI7OztPQUdHO0lBQ0gsWUFBcUIsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUFJLENBQUM7SUFFbEQ7OztPQUdHO0lBRUksU0FBUyxDQUFFLEtBQWE7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzt3RUFmVyxZQUFZOzZFQUFaLFlBQVk7QUFheEI7SUFEQyxPQUFPLEVBQUU7Ozs7NkNBR1Q7dUZBZlcsWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOytEQWNsQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnc2FmZUh0bWwnIH0pXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0RvbVNhbml0aXplcn0gX3Nhbml0aXplclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyICkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCAqIEByZXR1cm4ge1NhZmVIdG1sfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCB2YWx1ZTogc3RyaW5nICk6IFNhZmVIdG1sIHtcblx0XHRyZXR1cm4gdmFsdWUgPyB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoIHZhbHVlICkgOiAnJztcblx0fVxuXG59XG4iXX0=