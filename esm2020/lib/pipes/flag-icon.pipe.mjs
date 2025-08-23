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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1pY29uLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2ZsYWctaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVoRCxNQUFNLFFBQVEsR0FBVyxhQUFhLENBQUM7QUFDdkMsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDO0FBRzlCLE1BQU0sT0FBTyxZQUFZO0lBRXhCOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxXQUFtQjtRQUNwQyxJQUFLLENBQUMsV0FBVztZQUFHLE9BQU87UUFDM0IsSUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsV0FBVyxDQUFFO1lBQUcsTUFBTSxJQUFJLFNBQVMsQ0FBRSxrREFBa0QsQ0FBRSxDQUFDO1FBRS9HLE1BQU0sVUFBVSxHQUFhLENBQUMsQ0FBRSxXQUFXLENBQUU7YUFDNUMsS0FBSyxFQUFFO2FBQ1AsT0FBTyxFQUFFO2FBQ1QsS0FBSyxDQUFFLEVBQUUsQ0FBRTthQUNYLEdBQUcsQ0FBRSxDQUFFLENBQU0sRUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBRTthQUM3QyxLQUFLLEVBQUUsQ0FBQztRQUVULE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUFHLFVBQVUsQ0FBRSxDQUFDO0lBQzlDLENBQUM7O3dFQW5CVyxZQUFZOzZFQUFaLFlBQVk7O0lBTXZCLE9BQU8sRUFBRTs7Ozs2Q0FhVDt1RkFuQlcsWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVFsQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbmNvbnN0IENDX1JFR0VYOiBSZWdFeHAgPSAvXlthLXpdezJ9JC9pO1xuY29uc3QgT0ZGU0VUOiBudW1iZXIgPSAxMjczOTc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZsYWdJY29uJyB9KVxuZXhwb3J0IGNsYXNzIEZsYWdJY29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeUNvZGVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBjb3VudHJ5Q29kZTogc3RyaW5nICk6IHN0cmluZyB7XG5cdFx0aWYgKCAhY291bnRyeUNvZGUgKSByZXR1cm47XG5cdFx0aWYgKCAhQ0NfUkVHRVgudGVzdCggY291bnRyeUNvZGUgKSApIHRocm93IG5ldyBUeXBlRXJyb3IoICdjYyBhcmd1bWVudCBtdXN0IGJlIGFuIElTTyAzMTY2LTEgYWxwaGEtMiBzdHJpbmcnICk7XG5cblx0XHRjb25zdCBjb2RlUG9pbnRzOiBudW1iZXJbXSA9IF8oIGNvdW50cnlDb2RlIClcblx0XHQuY2hhaW4oKVxuXHRcdC50b1VwcGVyKClcblx0XHQuc3BsaXQoICcnIClcblx0XHQubWFwKCAoIGM6IGFueSApID0+IGMuY29kZVBvaW50QXQoKSArIE9GRlNFVCApXG5cdFx0LnZhbHVlKCk7XG5cblx0XHRyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoIC4uLmNvZGVQb2ludHMgKTtcblx0fVxuXG59XG4iXX0=