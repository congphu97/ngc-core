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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1zdHJpbmcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdGltZS1zdHJpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7SUFFMUI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFdBQW1CO1FBQ3BDLE1BQU0sT0FBTyxHQUFXLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxPQUFPLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFFLE9BQU8sR0FBRyxFQUFFLENBQUUsR0FBRyxFQUFFLENBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUUsT0FBTyxHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLENBQUUsQ0FBQztRQUMxRCxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7UUFFekIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQ3pCLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN6QixDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7UUFFekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztJQUMzQixDQUFDOzs0RUFuQlcsY0FBYztpRkFBZCxjQUFjO0FBTzFCO0lBREMsT0FBTyxFQUFFOzs7OytDQWFUO3VGQW5CVyxjQUFjO2NBRDFCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7Z0JBUXBCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAndGltZVN0cmluZycgfSlcbmV4cG9ydCBjbGFzcyBUaW1lU3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWlsaXNlY29uZHNcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBtaWxpc2Vjb25kczogbnVtYmVyICk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc2Vjb25kczogbnVtYmVyID0gbWlsaXNlY29uZHMgLyAxMDAwO1xuXHRcdGNvbnN0IHM6IG51bWJlciA9IE1hdGguZmxvb3IoIHNlY29uZHMgJSA2MCApO1xuXHRcdGNvbnN0IG06IG51bWJlciA9IE1hdGguZmxvb3IoICggc2Vjb25kcyAvIDYwICkgJSA2MCApO1xuXHRcdGNvbnN0IGg6IG51bWJlciA9IE1hdGguZmxvb3IoICggc2Vjb25kcyAvICggNjAgKiA2MCApICkgKTtcblx0XHRjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG5cblx0XHRoICYmIGFyci5wdXNoKCBgJHtofWhgICk7XG5cdFx0bSAmJiBhcnIucHVzaCggYCR7bX1tYCApO1xuXHRcdHMgJiYgYXJyLnB1c2goIGAke3N9c2AgKTtcblxuXHRcdHJldHVybiBfLmpvaW4oIGFyciwgJyAnICk7XG5cdH1cblxufVxuIl19