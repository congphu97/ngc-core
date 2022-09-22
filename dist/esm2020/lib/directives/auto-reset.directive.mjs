import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1yZXNldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1yZXNldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNELE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFJaUQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQyxjQUFTLEdBQXVCLE1BQU0sQ0FBQztLQTRCdkU7SUExQkE7O09BRUc7SUFDSCxRQUFRO1FBQ1AsSUFBSyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUcsT0FBTztRQUU3RCxVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVixJQUFLLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRWhFLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQzs7b0ZBOUJXLGtCQUFrQjtxRUFBbEIsa0JBQWtCO0FBR1c7SUFBL0IsWUFBWSxFQUFFO0lBQUUsWUFBWSxFQUFFOztpREFBMEI7QUFDekM7SUFBZixZQUFZLEVBQUU7O3FEQUErQzt1RkFKM0Qsa0JBQWtCO2NBRDlCLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFHNUMsV0FBVztrQkFBMUIsS0FBSztZQUMwQyxLQUFLO2tCQUFwRCxLQUFLO1lBQzBCLFNBQVM7a0JBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thdXRvUmVzZXRdJywgZXhwb3J0QXM6ICdhdXRvUmVzZXQnIH0pXG5leHBvcnQgY2xhc3MgQXV0b1Jlc2V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIGRlbGF5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGF1dG9SZXNldDogJ2luaXQnIHwgJ2Rlc3Ryb3knID0gJ2luaXQnO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICggdGhpcy5hdXRvUmVzZXQgIT09ICdpbml0JyB8fCAhdGhpcy5mb3JtQ29udHJvbCApIHJldHVybjtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0RXJyb3JzKCBudWxsICk7XG5cdFx0XHR0aGlzLmZvcm1Db250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG5cdFx0XHR0aGlzLmZvcm1Db250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuXHRcdH0sIHRoaXMuZGVsYXkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICggdGhpcy5hdXRvUmVzZXQgIT09ICdkZXN0cm95JyB8fCAhdGhpcy5mb3JtQ29udHJvbCApIHJldHVybjtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0RXJyb3JzKCBudWxsICk7XG5cdFx0XHR0aGlzLmZvcm1Db250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG5cdFx0XHR0aGlzLmZvcm1Db250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuXHRcdH0sIHRoaXMuZGVsYXkgKTtcblx0fVxuXG59XG4iXX0=