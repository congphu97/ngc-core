import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class TimerPipe {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds) {
        const seconds = miliseconds / 1000;
        const s = seconds % 60;
        const m = (seconds / 60) % 60;
        const h = (seconds / (60 * 60));
        return _.join([
            _.toPadNumber(Math.floor(h), 2),
            _.toPadNumber(Math.floor(m), 2),
            _.toPadNumber(Math.floor(s), 2),
        ], ':');
    }
}
TimerPipe.ɵfac = function TimerPipe_Factory(t) { return new (t || TimerPipe)(); };
TimerPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timer", type: TimerPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], TimerPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimerPipe, [{
        type: Pipe,
        args: [{ name: 'timer' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdGltZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFdBQW1CO1FBQ3BDLE1BQU0sT0FBTyxHQUFXLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLEdBQVcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsR0FBVyxDQUFFLE9BQU8sR0FBRyxFQUFFLENBQUUsR0FBRyxFQUFFLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQVcsQ0FBRSxPQUFPLEdBQUcsQ0FBRSxFQUFFLEdBQUcsRUFBRSxDQUFFLENBQUUsQ0FBQztRQUU1QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUU7WUFDZCxDQUFDLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLEVBQUUsQ0FBQyxDQUFFO1lBQ25DLENBQUMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsRUFBRSxDQUFDLENBQUU7WUFDbkMsQ0FBQyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxFQUFFLENBQUMsQ0FBRTtTQUNuQyxFQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQ1YsQ0FBQzs7a0VBbEJXLFNBQVM7dUVBQVQsU0FBUzs7SUFNcEIsT0FBTyxFQUFFOzs7OzBDQVlUO3VGQWxCVyxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Z0JBUWYsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICd0aW1lcicgfSlcbmV4cG9ydCBjbGFzcyBUaW1lclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1pbGlzZWNvbmRzXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggbWlsaXNlY29uZHM6IG51bWJlciApOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNlY29uZHM6IG51bWJlciA9IG1pbGlzZWNvbmRzIC8gMTAwMDtcblx0XHRjb25zdCBzOiBudW1iZXIgPSBzZWNvbmRzICUgNjA7XG5cdFx0Y29uc3QgbTogbnVtYmVyID0gKCBzZWNvbmRzIC8gNjAgKSAlIDYwO1xuXHRcdGNvbnN0IGg6IG51bWJlciA9ICggc2Vjb25kcyAvICggNjAgKiA2MCApICk7XG5cblx0XHRyZXR1cm4gXy5qb2luKCBbXG5cdFx0XHRfLnRvUGFkTnVtYmVyKCBNYXRoLmZsb29yKCBoICksIDIgKSxcblx0XHRcdF8udG9QYWROdW1iZXIoIE1hdGguZmxvb3IoIG0gKSwgMiApLFxuXHRcdFx0Xy50b1BhZE51bWJlciggTWF0aC5mbG9vciggcyApLCAyICksXG5cdFx0XSwgJzonICk7XG5cdH1cblxufVxuIl19