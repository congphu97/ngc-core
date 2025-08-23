import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class MinGreaterThanDirective {
    /**
     * @param {FormControl} c
     * @return {any}
     */
    validate(c) {
        const v = c.value;
        return v <= this.minGreaterThan
            ? { minGreaterThan: { min: this.minGreaterThan, actual: v } }
            : null;
    }
}
MinGreaterThanDirective.ɵfac = function MinGreaterThanDirective_Factory(t) { return new (t || MinGreaterThanDirective)(); };
MinGreaterThanDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MinGreaterThanDirective, selectors: [["", "minGreaterThan", "", "formControlName", ""], ["", "minGreaterThan", "", "formControl", ""], ["", "minGreaterThan", "", "ngModel", ""]], inputs: { minGreaterThan: "minGreaterThan" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinGreaterThanDirective, [{
        type: Directive,
        args: [{
                selector: '[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }],
            }]
    }], null, { minGreaterThan: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvbWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBaUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNOUUsTUFBTSxPQUFPLHVCQUF1QjtJQUluQzs7O09BR0c7SUFDSSxRQUFRLENBQUUsQ0FBcUI7UUFDckMsTUFBTSxDQUFDLEdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUxQixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYztZQUM5QixDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0QsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNULENBQUM7OzhGQWRXLHVCQUF1QjswRUFBdkIsdUJBQXVCLDJPQUZ2QixDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO3VGQUUvRSx1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRywyRkFBMkY7Z0JBQ3RHLFNBQVMsRUFBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLHlCQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUMzRjtnQkFHZ0IsY0FBYztrQkFBN0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3JcdDogJ1ttaW5HcmVhdGVyVGhhbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluR3JlYXRlclRoYW5dW2Zvcm1Db250cm9sXSxbbWluR3JlYXRlclRoYW5dW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzXHQ6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE1pbkdyZWF0ZXJUaGFuRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgbWluR3JlYXRlclRoYW46IG51bWJlcjtcblxuXHQvKipcblx0ICogQHBhcmFtIHtGb3JtQ29udHJvbH0gY1xuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwdWJsaWMgdmFsaWRhdGUoIGM6IFVudHlwZWRGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA8PSB0aGlzLm1pbkdyZWF0ZXJUaGFuXG5cdFx0XHQ/IHsgbWluR3JlYXRlclRoYW46IHsgbWluOiB0aGlzLm1pbkdyZWF0ZXJUaGFuLCBhY3R1YWw6IHYgfSB9XG5cdFx0XHQ6IG51bGw7XG5cdH1cblxufVxuIl19