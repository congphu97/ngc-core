import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class MaxLessThanDirective {
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c) {
        const v = c.value;
        return v >= this.maxLessThan
            ? { maxLessThan: { max: this.maxLessThan, actual: v } }
            : null;
    }
}
MaxLessThanDirective.ɵfac = function MaxLessThanDirective_Factory(t) { return new (t || MaxLessThanDirective)(); };
MaxLessThanDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaxLessThanDirective, selectors: [["", "maxLessThan", "", "formControlName", ""], ["", "maxLessThan", "", "formControl", ""], ["", "maxLessThan", "", "ngModel", ""]], inputs: { maxLessThan: "maxLessThan" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaxLessThanDirective, [{
        type: Directive,
        args: [{
                selector: '[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }],
            }]
    }], null, { maxLessThan: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvbWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBaUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNOUUsTUFBTSxPQUFPLG9CQUFvQjtJQUloQzs7O09BR0c7SUFDSSxRQUFRLENBQUUsQ0FBcUI7UUFDckMsTUFBTSxDQUFDLEdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUxQixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUMzQixDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNULENBQUM7O3dGQWRXLG9CQUFvQjt1RUFBcEIsb0JBQW9CLDROQUZwQixDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO3VGQUU1RSxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRyxrRkFBa0Y7Z0JBQzdGLFNBQVMsRUFBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLHNCQUFzQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN4RjtnQkFHZ0IsV0FBVztrQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3JcdDogJ1ttYXhMZXNzVGhhbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWF4TGVzc1RoYW5dW2Zvcm1Db250cm9sXSxbbWF4TGVzc1RoYW5dW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzXHQ6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBNYXhMZXNzVGhhbkRpcmVjdGl2ZSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE1heExlc3NUaGFuRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgbWF4TGVzc1RoYW46IG51bWJlcjtcblxuXHQvKipcblx0ICogQHBhcmFtIHtGb3JtQ29udHJvbH0gY1xuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwdWJsaWMgdmFsaWRhdGUoIGM6IFVudHlwZWRGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA+PSB0aGlzLm1heExlc3NUaGFuXG5cdFx0XHQ/IHsgbWF4TGVzc1RoYW46IHsgbWF4OiB0aGlzLm1heExlc3NUaGFuLCBhY3R1YWw6IHYgfSB9XG5cdFx0XHQ6IG51bGw7XG5cdH1cblxufVxuIl19