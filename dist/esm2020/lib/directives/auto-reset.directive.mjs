import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { DefaultValue, CoerceNumber } from '../decorators';
import * as i0 from "@angular/core";
export class AutoResetDirective {
    constructor() {
        this.delay = 0;
        this.autoReset = 'init';
    }
    /**
     * @constructor
     */
    ngOnInit() {
        if (this.autoReset !== 'init' || !this.formControl)
            return;
        setTimeout(() => {
            this.formControl.setErrors(null);
            this.formControl.markAsPristine();
            this.formControl.markAsUntouched();
        }, this.delay);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        if (this.autoReset !== 'destroy' || !this.formControl)
            return;
        setTimeout(() => {
            this.formControl.setErrors(null);
            this.formControl.markAsPristine();
            this.formControl.markAsUntouched();
        }, this.delay);
    }
}
AutoResetDirective.ɵfac = function AutoResetDirective_Factory(t) { return new (t || AutoResetDirective)(); };
AutoResetDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoResetDirective, selectors: [["", "autoReset", ""]], inputs: { formControl: "formControl", delay: "delay", autoReset: "autoReset" }, exportAs: ["autoReset"] });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], AutoResetDirective.prototype, "delay", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], AutoResetDirective.prototype, "autoReset", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoResetDirective, [{
        type: Directive,
        args: [{ selector: '[autoReset]', exportAs: 'autoReset' }]
    }], null, { formControl: [{
            type: Input
        }], delay: [{
            type: Input
        }], autoReset: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1yZXNldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1yZXNldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0QsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUlpRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBdUIsTUFBTSxDQUFDO0tBNEJ2RTtJQTFCQTs7T0FFRztJQUNILFFBQVE7UUFDUCxJQUFLLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRTdELFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNWLElBQUssSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFHLE9BQU87UUFFaEUsVUFBVSxDQUFFLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNqQixDQUFDOztvRkE5Qlcsa0JBQWtCO3FFQUFsQixrQkFBa0I7O0lBR3BCLFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7aURBQTBCOztJQUN4RCxZQUFZLEVBQUU7O3FEQUErQzt1RkFKM0Qsa0JBQWtCO2NBRDlCLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFHNUMsV0FBVztrQkFBMUIsS0FBSztZQUMwQyxLQUFLO2tCQUFwRCxLQUFLO1lBQzBCLFNBQVM7a0JBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0VmFsdWUsIENvZXJjZU51bWJlciB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYXV0b1Jlc2V0XScsIGV4cG9ydEFzOiAnYXV0b1Jlc2V0JyB9KVxuZXhwb3J0IGNsYXNzIEF1dG9SZXNldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbDtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgZGVsYXk6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYXV0b1Jlc2V0OiAnaW5pdCcgfCAnZGVzdHJveScgPSAnaW5pdCc7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKCB0aGlzLmF1dG9SZXNldCAhPT0gJ2luaXQnIHx8ICF0aGlzLmZvcm1Db250cm9sICkgcmV0dXJuO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy5mb3JtQ29udHJvbC5zZXRFcnJvcnMoIG51bGwgKTtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG5cdFx0fSwgdGhpcy5kZWxheSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKCB0aGlzLmF1dG9SZXNldCAhPT0gJ2Rlc3Ryb3knIHx8ICF0aGlzLmZvcm1Db250cm9sICkgcmV0dXJuO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy5mb3JtQ29udHJvbC5zZXRFcnJvcnMoIG51bGwgKTtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG5cdFx0fSwgdGhpcy5kZWxheSApO1xuXHR9XG5cbn1cbiJdfQ==