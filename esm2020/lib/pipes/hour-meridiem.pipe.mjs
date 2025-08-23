import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class HourMeridiemPipe {
    /**
     * @param {number} hour
     * @return {string}
     */
    transform(hour) {
        return !_.isNil(hour) ? moment().hour(hour).format('hh A') : undefined;
    }
}
HourMeridiemPipe.ɵfac = function HourMeridiemPipe_Factory(t) { return new (t || HourMeridiemPipe)(); };
HourMeridiemPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "hourMeridiem", type: HourMeridiemPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], HourMeridiemPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HourMeridiemPipe, [{
        type: Pipe,
        args: [{ name: 'hourMeridiem' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1tZXJpZGllbS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9ob3VyLW1lcmlkaWVtLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxnQkFBZ0I7SUFFNUI7OztPQUdHO0lBRUksU0FBUyxDQUFFLElBQVk7UUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDOztnRkFUVyxnQkFBZ0I7cUZBQWhCLGdCQUFnQjs7SUFNM0IsT0FBTyxFQUFFOzs7O2lEQUdUO3VGQVRXLGdCQUFnQjtjQUQ1QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO2dCQVF0QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2hvdXJNZXJpZGllbScgfSlcbmV4cG9ydCBjbGFzcyBIb3VyTWVyaWRpZW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBob3VyXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggaG91cjogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICFfLmlzTmlsKCBob3VyICkgPyBtb21lbnQoKS5ob3VyKCBob3VyICkuZm9ybWF0KCAnaGggQScgKSA6IHVuZGVmaW5lZDtcblx0fVxuXG59XG4iXX0=