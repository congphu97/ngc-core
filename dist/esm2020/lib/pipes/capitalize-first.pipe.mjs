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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS1maXJzdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlcy9jYXBpdGFsaXplLWZpcnN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHekMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7SUFFakQ7OztPQUdHO0lBRUksU0FBUyxDQUFFLEtBQWE7UUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUU7WUFDcEUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt1UEFYVyxtQkFBbUIsU0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7O0lBTTlCLE9BQU8sRUFBRTs7OztvREFLVDt1RkFYVyxtQkFBbUI7Y0FEL0IsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO2dCQVF6QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5pbXBvcnQgeyBFbXB0eVBpcGUgfSBmcm9tICcuL2VtcHR5LnBpcGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjYXBpdGFsaXplRmlyc3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZUZpcnN0UGlwZSBleHRlbmRzIEVtcHR5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCB2YWx1ZTogc3RyaW5nICk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICFfLmlzTmlsKCB2YWx1ZSApXG5cdFx0XHQ/IF8udG9VcHBlciggdmFsdWUuY2hhckF0KCAwICkgKSArIF8udG9Mb3dlciggdmFsdWUuc3Vic3RyaW5nKCAxICkgKVxuXHRcdFx0OiBzdXBlci50cmFuc2Zvcm0oKTtcblx0fVxuXG59XG4iXX0=