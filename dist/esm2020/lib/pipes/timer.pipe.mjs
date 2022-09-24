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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdGltZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFNBQVM7SUFFckI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFdBQW1CO1FBQ3BDLE1BQU0sT0FBTyxHQUFXLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLEdBQVcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsR0FBVyxDQUFFLE9BQU8sR0FBRyxFQUFFLENBQUUsR0FBRyxFQUFFLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQVcsQ0FBRSxPQUFPLEdBQUcsQ0FBRSxFQUFFLEdBQUcsRUFBRSxDQUFFLENBQUUsQ0FBQztRQUU1QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUU7WUFDZCxDQUFDLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFFLEVBQUUsQ0FBQyxDQUFFO1lBQ25DLENBQUMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsRUFBRSxDQUFDLENBQUU7WUFDbkMsQ0FBQyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxFQUFFLENBQUMsQ0FBRTtTQUNuQyxFQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQ1YsQ0FBQzs7a0VBbEJXLFNBQVM7dUVBQVQsU0FBUztBQU9yQjtJQURDLE9BQU8sRUFBRTs7OzswQ0FZVDt1RkFsQlcsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQVFmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAndGltZXInIH0pXG5leHBvcnQgY2xhc3MgVGltZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaWxpc2Vjb25kc1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIG1pbGlzZWNvbmRzOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRjb25zdCBzZWNvbmRzOiBudW1iZXIgPSBtaWxpc2Vjb25kcyAvIDEwMDA7XG5cdFx0Y29uc3QgczogbnVtYmVyID0gc2Vjb25kcyAlIDYwO1xuXHRcdGNvbnN0IG06IG51bWJlciA9ICggc2Vjb25kcyAvIDYwICkgJSA2MDtcblx0XHRjb25zdCBoOiBudW1iZXIgPSAoIHNlY29uZHMgLyAoIDYwICogNjAgKSApO1xuXG5cdFx0cmV0dXJuIF8uam9pbiggW1xuXHRcdFx0Xy50b1BhZE51bWJlciggTWF0aC5mbG9vciggaCApLCAyICksXG5cdFx0XHRfLnRvUGFkTnVtYmVyKCBNYXRoLmZsb29yKCBtICksIDIgKSxcblx0XHRcdF8udG9QYWROdW1iZXIoIE1hdGguZmxvb3IoIHMgKSwgMiApLFxuXHRcdF0sICc6JyApO1xuXHR9XG5cbn1cbiJdfQ==