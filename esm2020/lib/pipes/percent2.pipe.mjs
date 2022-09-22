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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudDIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvcGVyY2VudDIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxXQUFXO0lBRTVDOzs7OztPQUtHO0lBRUksU0FBUyxDQUFFLEtBQXNCLEVBQUUsYUFBcUIsT0FBTyxFQUFFLE1BQWU7UUFDdEYsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDckQsQ0FBQzs7b05BWFcsWUFBWSxTQUFaLFlBQVk7NkVBQVosWUFBWTtBQVN4QjtJQURDLE9BQU8sRUFBRTs7Ozs2Q0FHVDt1RkFYVyxZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBVWxCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZXJjZW50UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAncGVyY2VudDInIH0pXG5leHBvcnQgY2xhc3MgUGVyY2VudDJQaXBlIGV4dGVuZHMgUGVyY2VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHZhbHVlXG5cdCAqIEBwYXJhbSB7c3RyaW5nPX0gZGlnaXRzSW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZz19IGxvY2FsZVxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRpZ2l0c0luZm86IHN0cmluZyA9ICcxLjAtMicsIGxvY2FsZT86IHN0cmluZyApOiBhbnkge1xuXHRcdHJldHVybiBzdXBlci50cmFuc2Zvcm0oIHZhbHVlLCBkaWdpdHNJbmZvLCBsb2NhbGUgKTtcblx0fVxuXG59XG4iXX0=