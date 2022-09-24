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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9saW5rLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFFBQVE7SUFFcEI7OztPQUdHO0lBRUksU0FBUyxDQUFFLElBQVk7UUFDN0IsSUFBSyxDQUFDLElBQUk7WUFBRyxPQUFPO1FBRXBCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7O2dFQVhXLFFBQVE7cUVBQVIsUUFBUTtBQU9wQjtJQURDLE9BQU8sRUFBRTs7Ozt5Q0FLVDt1RkFYVyxRQUFRO2NBRHBCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBUWQsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2xpbmsnIH0pXG5leHBvcnQgY2xhc3MgTGlua1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxpbmtcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBsaW5rOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0XHRpZiAoICFsaW5rICkgcmV0dXJuO1xuXG5cdFx0cmV0dXJuIC9eaHR0cChzKT8vLnRlc3QoIGxpbmsgKSA/IGxpbmsgOiBgLy8ke2xpbmt9YDtcblx0fVxuXG59XG4iXX0=