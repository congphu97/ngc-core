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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvZW1vamkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxPQUFlO1FBQ2hDLElBQUssSUFBSSxNQUFNLENBQUUsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUU7WUFBRyxPQUFPLE9BQU8sQ0FBQztRQUVoRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBRSxRQUFRLENBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDOztrRUFYVyxTQUFTO3VFQUFULFNBQVM7O0lBTXBCLE9BQU8sRUFBRTs7OzswQ0FLVDt1RkFYVyxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Z0JBUWYsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUkVHRVggfSBmcm9tICcuLi9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2Vtb2ppJyB9KVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pZmllZFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHVuaWZpZWQ6IHN0cmluZyApOiBzdHJpbmcge1xuXHRcdGlmICggbmV3IFJlZ0V4cCggUkVHRVguRU1PSkkgKS50ZXN0KCB1bmlmaWVkICkgKSByZXR1cm4gdW5pZmllZDtcblxuXHRcdHJldHVybiB1bmlmaWVkID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoIHBhcnNlSW50KCB1bmlmaWVkLCAxNiApICkgOiAnJztcblx0fVxuXG59XG4iXX0=