import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class Percent2Pipe extends PercentPipe {
    /**
     * @param {string | number} value
     * @param {string=} digitsInfo
     * @param {string=} locale
     * @return {any}
     */
    transform(value, digitsInfo = '1.0-2', locale) {
        return super.transform(value, digitsInfo, locale);
    }
}
Percent2Pipe.ɵfac = /*@__PURE__*/ function () { let ɵPercent2Pipe_BaseFactory; return function Percent2Pipe_Factory(t) { return (ɵPercent2Pipe_BaseFactory || (ɵPercent2Pipe_BaseFactory = i0.ɵɵgetInheritedFactory(Percent2Pipe)))(t || Percent2Pipe); }; }();
Percent2Pipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "percent2", type: Percent2Pipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Object)
], Percent2Pipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Percent2Pipe, [{
        type: Pipe,
        args: [{ name: 'percent2' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudDIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvcGVyY2VudDIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxXQUFXO0lBRTVDOzs7OztPQUtHO0lBRUksU0FBUyxDQUFFLEtBQXNCLEVBQUUsYUFBcUIsT0FBTyxFQUFFLE1BQWU7UUFDdEYsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDckQsQ0FBQzs7b05BWFcsWUFBWSxTQUFaLFlBQVk7NkVBQVosWUFBWTs7SUFRdkIsT0FBTyxFQUFFOzs7OzZDQUdUO3VGQVhXLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFVbEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlcmNlbnRQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdwZXJjZW50MicgfSlcbmV4cG9ydCBjbGFzcyBQZXJjZW50MlBpcGUgZXh0ZW5kcyBQZXJjZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmFsdWVcblx0ICogQHBhcmFtIHtzdHJpbmc9fSBkaWdpdHNJbmZvXG5cdCAqIEBwYXJhbSB7c3RyaW5nPX0gbG9jYWxlXG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggdmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGlnaXRzSW5mbzogc3RyaW5nID0gJzEuMC0yJywgbG9jYWxlPzogc3RyaW5nICk6IGFueSB7XG5cdFx0cmV0dXJuIHN1cGVyLnRyYW5zZm9ybSggdmFsdWUsIGRpZ2l0c0luZm8sIGxvY2FsZSApO1xuXHR9XG5cbn1cbiJdfQ==