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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvbWluLWdyZWF0ZXItdGhhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBMEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNdkUsTUFBTSxPQUFPLHVCQUF1QjtJQUluQzs7O09BR0c7SUFDSSxRQUFRLENBQUUsQ0FBYztRQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQzlCLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1QsQ0FBQzs7OEZBZFcsdUJBQXVCOzBFQUF2Qix1QkFBdUIsMk9BRnZCLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7dUZBRS9FLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFHLDJGQUEyRjtnQkFDdEcsU0FBUyxFQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcseUJBQXlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzNGO2dCQUdnQixjQUFjO2tCQUE3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yXHQ6ICdbbWluR3JlYXRlclRoYW5dW2Zvcm1Db250cm9sTmFtZV0sW21pbkdyZWF0ZXJUaGFuXVtmb3JtQ29udHJvbF0sW21pbkdyZWF0ZXJUaGFuXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyc1x0OiBbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluR3JlYXRlclRoYW5EaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5HcmVhdGVyVGhhbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgcHVibGljIG1pbkdyZWF0ZXJUaGFuOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Rm9ybUNvbnRyb2x9IGNcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIHZhbGlkYXRlKCBjOiBGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA8PSB0aGlzLm1pbkdyZWF0ZXJUaGFuXG5cdFx0XHQ/IHsgbWluR3JlYXRlclRoYW46IHsgbWluOiB0aGlzLm1pbkdyZWF0ZXJUaGFuLCBhY3R1YWw6IHYgfSB9XG5cdFx0XHQ6IG51bGw7XG5cdH1cblxufVxuIl19