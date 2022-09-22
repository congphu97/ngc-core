import { Injectable } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class LoopService {
    constructor() {
        this._intervals = [];
    }
    /**
     * @param {() => void)} fn
     * @param {number} time
     * @return {number} index
     */
    set(fn, time) {
        const index = this._intervals.length ? this._intervals.length + 1 : 0;
        this._intervals[index] = setInterval(fn, time);
        return index;
    }
    /**
     * @param {number} index
     * @return {void}
     */
    cancel(index) {
        clearInterval(this._intervals[index]);
    }
    /**
     * @return {void}
     */
    destroy() {
        _.forEach(this._intervals, (_o, i) => {
            clearInterval(this._intervals[i]);
        });
        this._intervals = [];
    }
}
LoopService.ɵfac = function LoopService_Factory(t) { return new (t || LoopService)(); };
LoopService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoopService, factory: LoopService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoopService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9vcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9sb29wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBR3ZCLE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBR1MsZUFBVSxHQUFhLEVBQUUsQ0FBQztLQWtDbEM7SUFoQ0E7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBRSxFQUFjLEVBQUUsSUFBWTtRQUN2QyxNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsR0FBRyxXQUFXLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBdUIsQ0FBQztRQUV4RSxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUUsS0FBYTtRQUMzQixhQUFhLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBRSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU87UUFDYixDQUFDLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxFQUFVLEVBQUUsQ0FBUyxFQUFHLEVBQUU7WUFDdkQsYUFBYSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUUsQ0FBQztRQUVKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O3NFQWxDVyxXQUFXO2lFQUFYLFdBQVcsV0FBWCxXQUFXO3VGQUFYLFdBQVc7Y0FEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb29wU2VydmljZSB7XG5cblx0cHJpdmF0ZSBfaW50ZXJ2YWxzOiBudW1iZXJbXSA9IFtdO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0geygpID0+IHZvaWQpfSBmblxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRwdWJsaWMgc2V0KCBmbjogKCkgPT4gdm9pZCwgdGltZTogbnVtYmVyICk6IG51bWJlciB7XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuX2ludGVydmFscy5sZW5ndGggPyB0aGlzLl9pbnRlcnZhbHMubGVuZ3RoICsgMSA6IDA7XG5cblx0XHR0aGlzLl9pbnRlcnZhbHNbIGluZGV4IF0gPSBzZXRJbnRlcnZhbCggZm4sIHRpbWUgKSBhcyB1bmtub3duIGFzIG51bWJlcjtcblxuXHRcdHJldHVybiBpbmRleDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjYW5jZWwoIGluZGV4OiBudW1iZXIgKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5faW50ZXJ2YWxzWyBpbmRleCBdICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXN0cm95KCkge1xuXHRcdF8uZm9yRWFjaCggdGhpcy5faW50ZXJ2YWxzLCAoIF9vOiBudW1iZXIsIGk6IG51bWJlciApID0+IHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuX2ludGVydmFsc1sgaSBdICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5faW50ZXJ2YWxzID0gW107XG5cdH1cblxufVxuIl19