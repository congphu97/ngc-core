import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class TrackByFnPipe {
    /**
     * @param {string} property
     * @return {() => any}
     */
    transform(property) {
        return (_idx, item) => property ? _.get(item, property) : item;
    }
}
TrackByFnPipe.ɵfac = function TrackByFnPipe_Factory(t) { return new (t || TrackByFnPipe)(); };
TrackByFnPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "trackByFn", type: TrackByFnPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Function)
], TrackByFnPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackByFnPipe, [{
        type: Pipe,
        args: [{ name: 'trackByFn' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnktZm4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdHJhY2stYnktZm4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGFBQWE7SUFFekI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFFBQWdCO1FBQ2pDLE9BQU8sQ0FBRSxJQUFZLEVBQUUsSUFBOEIsRUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLENBQUM7OzBFQVRXLGFBQWE7K0VBQWIsYUFBYTtBQU96QjtJQURDLE9BQU8sRUFBRTs7Ozs4Q0FHVDt1RkFUVyxhQUFhO2NBRHpCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBUW5CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAndHJhY2tCeUZuJyB9KVxuZXhwb3J0IGNsYXNzIFRyYWNrQnlGblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG5cdCAqIEByZXR1cm4geygpID0+IGFueX1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggcHJvcGVydHk6IHN0cmluZyApOiAoIGlkeDogbnVtYmVyLCBpdGVtOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0gKSA9PiBhbnkge1xuXHRcdHJldHVybiAoIF9pZHg6IG51bWJlciwgaXRlbTogeyBbIGtleTogc3RyaW5nIF06IGFueSB9ICkgPT4gcHJvcGVydHkgPyBfLmdldCggaXRlbSwgcHJvcGVydHkgKSA6IGl0ZW07XG5cdH1cblxufVxuIl19