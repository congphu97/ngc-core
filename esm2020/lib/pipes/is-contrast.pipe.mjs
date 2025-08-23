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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtY29udHJhc3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvaXMtY29udHJhc3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7SUFFMUI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxHQUFXO1FBQzVCLElBQUssQ0FBQyxHQUFHO1lBQUcsT0FBTyxLQUFLLENBQUM7UUFFekIsTUFBTSxHQUFHLEdBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUVoQyxJQUFLLENBQUMsR0FBRztZQUFHLE9BQU8sS0FBSyxDQUFDO1FBRXpCLE1BQU0sUUFBUSxHQUFXLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUM7UUFFdEgsT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7OzRFQWxCVyxjQUFjO2lGQUFkLGNBQWM7O0lBT3pCLE9BQU8sRUFBRTs7OzsrQ0FXVDt1RkFsQlcsY0FBYztjQUQxQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2dCQVNwQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUkdCIH0gZnJvbSAnLi4vbG9kYXNoLW1peGluJztcbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdpc0NvbnRyYXN0JyB9KVxuZXhwb3J0IGNsYXNzIElzQ29udHJhc3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBoZXhcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRDb2xvclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBoZXg6IHN0cmluZyApOiBib29sZWFuIHtcblx0XHRpZiAoICFoZXggKSByZXR1cm4gZmFsc2U7XG5cblx0XHRjb25zdCByZ2I6IFJHQiA9IF8udG9SZ2IoIGhleCApO1xuXG5cdFx0aWYgKCAhcmdiICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Y29uc3QgY29udHJhc3Q6IG51bWJlciA9ICggTWF0aC5yb3VuZCggcmdiLnIgKiAyOTkgKSArIE1hdGgucm91bmQoIHJnYi5nICogNTg3ICkgKyBNYXRoLnJvdW5kKCByZ2IuYiAqIDExNCApICkgLyAxMDAwO1xuXG5cdFx0cmV0dXJuIGNvbnRyYXN0IDwgMTgwO1xuXHR9XG5cbn1cbiJdfQ==