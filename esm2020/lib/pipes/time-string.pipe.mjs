import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class TimeStringPipe {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds) {
        const seconds = miliseconds / 1000;
        const s = Math.floor(seconds % 60);
        const m = Math.floor((seconds / 60) % 60);
        const h = Math.floor((seconds / (60 * 60)));
        const arr = [];
        h && arr.push(`${h}h`);
        m && arr.push(`${m}m`);
        s && arr.push(`${s}s`);
        return _.join(arr, ' ');
    }
}
TimeStringPipe.ɵfac = function TimeStringPipe_Factory(t) { return new (t || TimeStringPipe)(); };
TimeStringPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timeString", type: TimeStringPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], TimeStringPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeStringPipe, [{
        type: Pipe,
        args: [{ name: 'timeString' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1zdHJpbmcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdGltZS1zdHJpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7SUFFMUI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFdBQW1CO1FBQ3BDLE1BQU0sT0FBTyxHQUFXLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxPQUFPLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFFLE9BQU8sR0FBRyxFQUFFLENBQUUsR0FBRyxFQUFFLENBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUUsT0FBTyxHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLENBQUUsQ0FBQztRQUMxRCxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7UUFFekIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQ3pCLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN6QixDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7UUFFekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztJQUMzQixDQUFDOzs0RUFuQlcsY0FBYztpRkFBZCxjQUFjOztJQU16QixPQUFPLEVBQUU7Ozs7K0NBYVQ7dUZBbkJXLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFRcEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICd0aW1lU3RyaW5nJyB9KVxuZXhwb3J0IGNsYXNzIFRpbWVTdHJpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaWxpc2Vjb25kc1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIG1pbGlzZWNvbmRzOiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRjb25zdCBzZWNvbmRzOiBudW1iZXIgPSBtaWxpc2Vjb25kcyAvIDEwMDA7XG5cdFx0Y29uc3QgczogbnVtYmVyID0gTWF0aC5mbG9vciggc2Vjb25kcyAlIDYwICk7XG5cdFx0Y29uc3QgbTogbnVtYmVyID0gTWF0aC5mbG9vciggKCBzZWNvbmRzIC8gNjAgKSAlIDYwICk7XG5cdFx0Y29uc3QgaDogbnVtYmVyID0gTWF0aC5mbG9vciggKCBzZWNvbmRzIC8gKCA2MCAqIDYwICkgKSApO1xuXHRcdGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcblxuXHRcdGggJiYgYXJyLnB1c2goIGAke2h9aGAgKTtcblx0XHRtICYmIGFyci5wdXNoKCBgJHttfW1gICk7XG5cdFx0cyAmJiBhcnIucHVzaCggYCR7c31zYCApO1xuXG5cdFx0cmV0dXJuIF8uam9pbiggYXJyLCAnICcgKTtcblx0fVxuXG59XG4iXX0=