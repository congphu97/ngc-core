import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class IsFinitePipe {
    /**
     * @param {number} num
     * @return {boolean}
     */
    transform(num) {
        return _.isFinite(num);
    }
}
IsFinitePipe.ɵfac = function IsFinitePipe_Factory(t) { return new (t || IsFinitePipe)(); };
IsFinitePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "isFinite", type: IsFinitePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], IsFinitePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsFinitePipe, [{
        type: Pipe,
        args: [{ name: 'isFinite' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZmluaXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL2lzLWZpbml0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7O09BR0c7SUFFSSxTQUFTLENBQUUsR0FBVztRQUM1QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDMUIsQ0FBQzs7d0VBVFcsWUFBWTs2RUFBWixZQUFZOztJQU12QixPQUFPLEVBQUU7Ozs7NkNBR1Q7dUZBVFcsWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVFsQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2lzRmluaXRlJyB9KVxuZXhwb3J0IGNsYXNzIElzRmluaXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIG51bTogbnVtYmVyICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBfLmlzRmluaXRlKCBudW0gKTtcblx0fVxuXG59XG4iXX0=