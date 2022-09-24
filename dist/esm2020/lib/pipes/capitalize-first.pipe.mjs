import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
export class CapitalizeFirstPipe extends EmptyPipe {
    /**
     * @param {string} value
     * @return {string}
     */
    transform(value) {
        return !_.isNil(value)
            ? _.toUpper(value.charAt(0)) + _.toLower(value.substring(1))
            : super.transform();
    }
}
CapitalizeFirstPipe.ɵfac = /*@__PURE__*/ function () { let ɵCapitalizeFirstPipe_BaseFactory; return function CapitalizeFirstPipe_Factory(t) { return (ɵCapitalizeFirstPipe_BaseFactory || (ɵCapitalizeFirstPipe_BaseFactory = i0.ɵɵgetInheritedFactory(CapitalizeFirstPipe)))(t || CapitalizeFirstPipe); }; }();
CapitalizeFirstPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "capitalizeFirst", type: CapitalizeFirstPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CapitalizeFirstPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapitalizeFirstPipe, [{
        type: Pipe,
        args: [{ name: 'capitalizeFirst' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS1maXJzdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9jYXBpdGFsaXplLWZpcnN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHekMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7SUFFakQ7OztPQUdHO0lBRUksU0FBUyxDQUFFLEtBQWE7UUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUU7WUFDcEUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt1UEFYVyxtQkFBbUIsU0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7QUFPL0I7SUFEQyxPQUFPLEVBQUU7Ozs7b0RBS1Q7dUZBWFcsbUJBQW1CO2NBRC9CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtnQkFRekIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuaW1wb3J0IHsgRW1wdHlQaXBlIH0gZnJvbSAnLi9lbXB0eS5waXBlJztcblxuQFBpcGUoeyBuYW1lOiAnY2FwaXRhbGl6ZUZpcnN0JyB9KVxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVGaXJzdFBpcGUgZXh0ZW5kcyBFbXB0eVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggdmFsdWU6IHN0cmluZyApOiBzdHJpbmcge1xuXHRcdHJldHVybiAhXy5pc05pbCggdmFsdWUgKVxuXHRcdFx0PyBfLnRvVXBwZXIoIHZhbHVlLmNoYXJBdCggMCApICkgKyBfLnRvTG93ZXIoIHZhbHVlLnN1YnN0cmluZyggMSApIClcblx0XHRcdDogc3VwZXIudHJhbnNmb3JtKCk7XG5cdH1cblxufVxuIl19