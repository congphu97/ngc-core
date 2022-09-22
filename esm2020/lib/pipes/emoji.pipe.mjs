import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { REGEX } from '../resources';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class EmojiPipe {
    /**
     * @param {string} unified
     * @return {string}
     */
    transform(unified) {
        if (new RegExp(REGEX.EMOJI).test(unified))
            return unified;
        return unified ? String.fromCodePoint(parseInt(unified, 16)) : '';
    }
}
EmojiPipe.ɵfac = function EmojiPipe_Factory(t) { return new (t || EmojiPipe)(); };
EmojiPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "emoji", type: EmojiPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], EmojiPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmojiPipe, [{
        type: Pipe,
        args: [{ name: 'emoji' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZW1vamkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxPQUFlO1FBQ2hDLElBQUssSUFBSSxNQUFNLENBQUUsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUU7WUFBRyxPQUFPLE9BQU8sQ0FBQztRQUVoRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBRSxRQUFRLENBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDOztrRUFYVyxTQUFTO3VFQUFULFNBQVM7QUFPckI7SUFEQyxPQUFPLEVBQUU7Ozs7MENBS1Q7dUZBWFcsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQVFmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJFR0VYIH0gZnJvbSAnLi4vcmVzb3VyY2VzJztcbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICdlbW9qaScgfSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaWZpZWRcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCB1bmlmaWVkOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0XHRpZiAoIG5ldyBSZWdFeHAoIFJFR0VYLkVNT0pJICkudGVzdCggdW5pZmllZCApICkgcmV0dXJuIHVuaWZpZWQ7XG5cblx0XHRyZXR1cm4gdW5pZmllZCA/IFN0cmluZy5mcm9tQ29kZVBvaW50KCBwYXJzZUludCggdW5pZmllZCwgMTYgKSApIDogJyc7XG5cdH1cblxufVxuIl19