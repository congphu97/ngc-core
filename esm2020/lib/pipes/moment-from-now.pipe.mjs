import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
export class MomentFromNowPipe extends EmptyPipe {
    /**
     * @param {any} input
     * @return {string}
     */
    transform(input) {
        if (_.isNil(input))
            return super.transform();
        const output = moment(input);
        return output.isValid() ? output.fromNow() : super.transform();
    }
}
MomentFromNowPipe.ɵfac = /*@__PURE__*/ function () { let ɵMomentFromNowPipe_BaseFactory; return function MomentFromNowPipe_Factory(t) { return (ɵMomentFromNowPipe_BaseFactory || (ɵMomentFromNowPipe_BaseFactory = i0.ɵɵgetInheritedFactory(MomentFromNowPipe)))(t || MomentFromNowPipe); }; }();
MomentFromNowPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "momentFromNow", type: MomentFromNowPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MomentFromNowPipe, [{
        type: Pipe,
        args: [{ name: 'momentFromNow' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWZyb20tbm93LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL21vbWVudC1mcm9tLW5vdy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sTUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHekMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQVM7SUFFL0M7OztPQUdHO0lBQ0ksU0FBUyxDQUFFLEtBQVU7UUFDM0IsSUFBSyxDQUFDLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRTtZQUFHLE9BQU8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpELE1BQU0sTUFBTSxHQUFXLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUV2QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEUsQ0FBQzs7Nk9BWlcsaUJBQWlCLFNBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnQsIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEVtcHR5UGlwZSB9IGZyb20gJy4vZW1wdHkucGlwZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21vbWVudEZyb21Ob3cnIH0pXG5leHBvcnQgY2xhc3MgTW9tZW50RnJvbU5vd1BpcGUgZXh0ZW5kcyBFbXB0eVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGlucHV0XG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGlucHV0OiBhbnkgKTogc3RyaW5nIHtcblx0XHRpZiAoIF8uaXNOaWwoIGlucHV0ICkgKSByZXR1cm4gc3VwZXIudHJhbnNmb3JtKCk7XG5cblx0XHRjb25zdCBvdXRwdXQ6IE1vbWVudCA9IG1vbWVudCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBvdXRwdXQuaXNWYWxpZCgpID8gb3V0cHV0LmZyb21Ob3coKSA6IHN1cGVyLnRyYW5zZm9ybSgpO1xuXHR9XG5cbn1cbiJdfQ==