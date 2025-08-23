import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class LinkPipe {
    /**
     * @param {string} link
     * @return {string}
     */
    transform(link) {
        if (!link)
            return;
        return /^http(s)?/.test(link) ? link : `//${link}`;
    }
}
LinkPipe.ɵfac = function LinkPipe_Factory(t) { return new (t || LinkPipe)(); };
LinkPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "link", type: LinkPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], LinkPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinkPipe, [{
        type: Pipe,
        args: [{ name: 'link' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9saW5rLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFFBQVE7SUFFcEI7OztPQUdHO0lBRUksU0FBUyxDQUFFLElBQVk7UUFDN0IsSUFBSyxDQUFDLElBQUk7WUFBRyxPQUFPO1FBRXBCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7O2dFQVhXLFFBQVE7cUVBQVIsUUFBUTs7SUFNbkIsT0FBTyxFQUFFOzs7O3lDQUtUO3VGQVhXLFFBQVE7Y0FEcEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtnQkFRZCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnbGluaycgfSlcbmV4cG9ydCBjbGFzcyBMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGlua1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGxpbms6IHN0cmluZyApOiBzdHJpbmcge1xuXHRcdGlmICggIWxpbmsgKSByZXR1cm47XG5cblx0XHRyZXR1cm4gL15odHRwKHMpPy8udGVzdCggbGluayApID8gbGluayA6IGAvLyR7bGlua31gO1xuXHR9XG5cbn1cbiJdfQ==