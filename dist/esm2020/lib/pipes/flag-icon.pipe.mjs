import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
const CC_REGEX = /^[a-z]{2}$/i;
const OFFSET = 127397;
export class FlagIconPipe {
    /**
     * @param {string} countryCode
     * @return {string}
     */
    transform(countryCode) {
        if (!countryCode)
            return;
        if (!CC_REGEX.test(countryCode))
            throw new TypeError('cc argument must be an ISO 3166-1 alpha-2 string');
        const codePoints = _(countryCode)
            .chain()
            .toUpper()
            .split('')
            .map((c) => c.codePointAt() + OFFSET)
            .value();
        return String.fromCodePoint(...codePoints);
    }
}
FlagIconPipe.ɵfac = function FlagIconPipe_Factory(t) { return new (t || FlagIconPipe)(); };
FlagIconPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "flagIcon", type: FlagIconPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], FlagIconPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlagIconPipe, [{
        type: Pipe,
        args: [{ name: 'flagIcon' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1pY29uLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2ZsYWctaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRCxNQUFNLFFBQVEsR0FBVyxhQUFhLENBQUM7QUFDdkMsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDO0FBRzlCLE1BQU0sT0FBTyxZQUFZO0lBRXhCOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxXQUFtQjtRQUNwQyxJQUFLLENBQUMsV0FBVztZQUFHLE9BQU87UUFDM0IsSUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsV0FBVyxDQUFFO1lBQUcsTUFBTSxJQUFJLFNBQVMsQ0FBRSxrREFBa0QsQ0FBRSxDQUFDO1FBRS9HLE1BQU0sVUFBVSxHQUFhLENBQUMsQ0FBRSxXQUFXLENBQUU7YUFDNUMsS0FBSyxFQUFFO2FBQ1AsT0FBTyxFQUFFO2FBQ1QsS0FBSyxDQUFFLEVBQUUsQ0FBRTthQUNYLEdBQUcsQ0FBRSxDQUFFLENBQU0sRUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBRTthQUM3QyxLQUFLLEVBQUUsQ0FBQztRQUVULE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUFHLFVBQVUsQ0FBRSxDQUFDO0lBQzlDLENBQUM7O3dFQW5CVyxZQUFZOzZFQUFaLFlBQVk7QUFPeEI7SUFEQyxPQUFPLEVBQUU7Ozs7NkNBYVQ7dUZBbkJXLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFRbEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5jb25zdCBDQ19SRUdFWDogUmVnRXhwID0gL15bYS16XXsyfSQvaTtcbmNvbnN0IE9GRlNFVDogbnVtYmVyID0gMTI3Mzk3O1xuXG5AUGlwZSh7IG5hbWU6ICdmbGFnSWNvbicgfSlcbmV4cG9ydCBjbGFzcyBGbGFnSWNvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlDb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggY291bnRyeUNvZGU6IHN0cmluZyApOiBzdHJpbmcge1xuXHRcdGlmICggIWNvdW50cnlDb2RlICkgcmV0dXJuO1xuXHRcdGlmICggIUNDX1JFR0VYLnRlc3QoIGNvdW50cnlDb2RlICkgKSB0aHJvdyBuZXcgVHlwZUVycm9yKCAnY2MgYXJndW1lbnQgbXVzdCBiZSBhbiBJU08gMzE2Ni0xIGFscGhhLTIgc3RyaW5nJyApO1xuXG5cdFx0Y29uc3QgY29kZVBvaW50czogbnVtYmVyW10gPSBfKCBjb3VudHJ5Q29kZSApXG5cdFx0LmNoYWluKClcblx0XHQudG9VcHBlcigpXG5cdFx0LnNwbGl0KCAnJyApXG5cdFx0Lm1hcCggKCBjOiBhbnkgKSA9PiBjLmNvZGVQb2ludEF0KCkgKyBPRkZTRVQgKVxuXHRcdC52YWx1ZSgpO1xuXG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KCAuLi5jb2RlUG9pbnRzICk7XG5cdH1cblxufVxuIl19