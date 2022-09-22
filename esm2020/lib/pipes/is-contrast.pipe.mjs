import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class IsContrastPipe {
    /**
     * @param {string} hex
     * @param {string} textColor
     * @return {boolean}
     */
    transform(hex) {
        if (!hex)
            return false;
        const rgb = _.toRgb(hex);
        if (!rgb)
            return false;
        const contrast = (Math.round(rgb.r * 299) + Math.round(rgb.g * 587) + Math.round(rgb.b * 114)) / 1000;
        return contrast < 180;
    }
}
IsContrastPipe.ɵfac = function IsContrastPipe_Factory(t) { return new (t || IsContrastPipe)(); };
IsContrastPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "isContrast", type: IsContrastPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], IsContrastPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsContrastPipe, [{
        type: Pipe,
        args: [{ name: 'isContrast' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtY29udHJhc3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvaXMtY29udHJhc3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7SUFFMUI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxHQUFXO1FBQzVCLElBQUssQ0FBQyxHQUFHO1lBQUcsT0FBTyxLQUFLLENBQUM7UUFFekIsTUFBTSxHQUFHLEdBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUVoQyxJQUFLLENBQUMsR0FBRztZQUFHLE9BQU8sS0FBSyxDQUFDO1FBRXpCLE1BQU0sUUFBUSxHQUFXLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUM7UUFFdEgsT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7OzRFQWxCVyxjQUFjO2lGQUFkLGNBQWM7QUFRMUI7SUFEQyxPQUFPLEVBQUU7Ozs7K0NBV1Q7dUZBbEJXLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFTcEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFJHQiB9IGZyb20gJy4uL2xvZGFzaC1taXhpbic7XG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnaXNDb250cmFzdCcgfSlcbmV4cG9ydCBjbGFzcyBJc0NvbnRyYXN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaGV4XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0Q29sb3Jcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaGV4OiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdFx0aWYgKCAhaGV4ICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Y29uc3QgcmdiOiBSR0IgPSBfLnRvUmdiKCBoZXggKTtcblxuXHRcdGlmICggIXJnYiApIHJldHVybiBmYWxzZTtcblxuXHRcdGNvbnN0IGNvbnRyYXN0OiBudW1iZXIgPSAoIE1hdGgucm91bmQoIHJnYi5yICogMjk5ICkgKyBNYXRoLnJvdW5kKCByZ2IuZyAqIDU4NyApICsgTWF0aC5yb3VuZCggcmdiLmIgKiAxMTQgKSApIC8gMTAwMDtcblxuXHRcdHJldHVybiBjb250cmFzdCA8IDE4MDtcblx0fVxuXG59XG4iXX0=