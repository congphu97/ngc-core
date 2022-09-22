import { Pipe } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class ClonePipe {
    /**
     * @param {any} data
     * @param {boolean=} isDeep
     * @return {any}
     */
    transform(data, isDeep) {
        return isDeep ? _.cloneDeep(data) : _.clone(data);
    }
}
ClonePipe.ɵfac = function ClonePipe_Factory(t) { return new (t || ClonePipe)(); };
ClonePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "clone", type: ClonePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClonePipe, [{
        type: Pipe,
        args: [{ name: 'clone' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvY2xvbmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBR3ZCLE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7O09BSUc7SUFDSSxTQUFTLENBQUUsSUFBUyxFQUFFLE1BQWdCO1FBQzVDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELENBQUM7O2tFQVRXLFNBQVM7dUVBQVQsU0FBUzt1RkFBVCxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AUGlwZSh7IG5hbWU6ICdjbG9uZScgfSlcbmV4cG9ydCBjbGFzcyBDbG9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGRhdGFcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNEZWVwXG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGRhdGE6IGFueSwgaXNEZWVwPzogYm9vbGVhbiApOiBhbnkge1xuXHRcdHJldHVybiBpc0RlZXAgPyBfLmNsb25lRGVlcCggZGF0YSApIDogXy5jbG9uZSggZGF0YSApO1xuXHR9XG5cbn1cbiJdfQ==