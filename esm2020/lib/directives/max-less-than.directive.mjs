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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvbWF4LWxlc3MtdGhhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBMEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNdkUsTUFBTSxPQUFPLG9CQUFvQjtJQUloQzs7O09BR0c7SUFDSSxRQUFRLENBQUUsQ0FBYztRQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQzNCLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1QsQ0FBQzs7d0ZBZFcsb0JBQW9CO3VFQUFwQixvQkFBb0IsNE5BRnBCLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7dUZBRTVFLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFHLGtGQUFrRjtnQkFDN0YsU0FBUyxFQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hGO2dCQUdnQixXQUFXO2tCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yXHQ6ICdbbWF4TGVzc1RoYW5dW2Zvcm1Db250cm9sTmFtZV0sW21heExlc3NUaGFuXVtmb3JtQ29udHJvbF0sW21heExlc3NUaGFuXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyc1x0OiBbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWF4TGVzc1RoYW5EaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNYXhMZXNzVGhhbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgcHVibGljIG1heExlc3NUaGFuOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Rm9ybUNvbnRyb2x9IGNcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0cHVibGljIHZhbGlkYXRlKCBjOiBGb3JtQ29udHJvbCApOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0ge1xuXHRcdGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG5cblx0XHRyZXR1cm4gdiA+PSB0aGlzLm1heExlc3NUaGFuXG5cdFx0XHQ/IHsgbWF4TGVzc1RoYW46IHsgbWF4OiB0aGlzLm1heExlc3NUaGFuLCBhY3R1YWw6IHYgfSB9XG5cdFx0XHQ6IG51bGw7XG5cdH1cblxufVxuIl19