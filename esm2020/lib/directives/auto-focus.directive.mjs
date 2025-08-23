import { __decorate, __metadata } from "tslib";
import { ElementRef, Directive, Input } from '@angular/core';
import { CoerceBoolean, CoerceNumber, DefaultValue } from '../decorators';
import * as i0 from "@angular/core";
export class AutoFocusDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.delay = 0;
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        if (this.disabled || this.disableControl || !this.autoFocusOn)
            return;
        setTimeout(() => {
            if (document.activeElement instanceof HTMLInputElement
                || document.activeElement instanceof HTMLTextAreaElement
                || document.activeElement instanceof HTMLSelectElement) {
                return;
            }
            const input = this._elementRef.nativeElement;
            input.focus();
            input instanceof HTMLTextAreaElement && input.setSelectionRange(0, input.value.length);
            if (!input.hasAttribute('contenteditable'))
                return;
            const range = document.createRange();
            range.selectNodeContents(input);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }, this.delay);
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AutoFocusDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoFocusDirective, selectors: [["", "autoFocusOn", ""]], inputs: { delay: "delay", disableControl: "disableControl", disabled: "disabled", autoFocusOn: "autoFocusOn" }, exportAs: ["autoFocusOn"] });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], AutoFocusDirective.prototype, "delay", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], AutoFocusDirective.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], AutoFocusDirective.prototype, "autoFocusOn", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoFocusDirective, [{
        type: Directive,
        args: [{ selector: '[autoFocusOn]', exportAs: 'autoFocusOn' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { delay: [{
            type: Input
        }], disableControl: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocusOn: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcxRSxNQUFNLE9BQU8sa0JBQWtCO0lBTzlCOzs7T0FHRztJQUNILFlBQXFCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVEksVUFBSyxHQUFXLENBQUMsQ0FBQztJQVNsQixDQUFDO0lBRWpEOztPQUVHO0lBQ0gsZUFBZTtRQUNkLElBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRXhFLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSyxRQUFRLENBQUMsYUFBYSxZQUFZLGdCQUFnQjttQkFDdkMsUUFBUSxDQUFDLGFBQWEsWUFBWSxtQkFBbUI7bUJBQ3JELFFBQVEsQ0FBQyxhQUFhLFlBQVksaUJBQWlCLEVBQUc7Z0JBQ3JFLE9BQU87YUFDUDtZQUVELE1BQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUUxRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxLQUFLLFlBQVksbUJBQW1CLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBRXpGLElBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFFLGlCQUFpQixDQUFFO2dCQUFHLE9BQU87WUFFdkQsTUFBTSxLQUFLLEdBQVUsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTVDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBRXhCLE1BQU0sR0FBRyxHQUFjLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUU3QyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7O29GQTNDVyxrQkFBa0I7cUVBQWxCLGtCQUFrQjs7SUFFcEIsWUFBWSxFQUFFO0lBQUUsWUFBWSxFQUFFOztpREFBMEI7O0lBRXhELGFBQWEsRUFBRTs7b0RBQTBCOztJQUN6QyxhQUFhLEVBQUU7O3VEQUE2Qjt1RkFMMUMsa0JBQWtCO2NBRDlCLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTs2REFHaEIsS0FBSztrQkFBcEQsS0FBSztZQUNVLGNBQWM7a0JBQTdCLEtBQUs7WUFDMkIsUUFBUTtrQkFBeEMsS0FBSztZQUMyQixXQUFXO2tCQUEzQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuLCBDb2VyY2VOdW1iZXIsIERlZmF1bHRWYWx1ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYXV0b0ZvY3VzT25dJywgZXhwb3J0QXM6ICdhdXRvRm9jdXNPbicgfSlcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBkZWxheTogbnVtYmVyID0gMDtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVDb250cm9sOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYXV0b0ZvY3VzT246IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IF9lbGVtZW50UmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVDb250cm9sIHx8ICF0aGlzLmF1dG9Gb2N1c09uICkgcmV0dXJuO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlucHV0OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdGlucHV0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSggMCwgaW5wdXQudmFsdWUubGVuZ3RoICk7XG5cblx0XHRcdGlmICggIWlucHV0Lmhhc0F0dHJpYnV0ZSggJ2NvbnRlbnRlZGl0YWJsZScgKSApIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcmFuZ2U6IFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuXHRcdFx0cmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKCBpbnB1dCApO1xuXHRcdFx0cmFuZ2UuY29sbGFwc2UoIGZhbHNlICk7XG5cblx0XHRcdGNvbnN0IHNlbDogU2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG5cdFx0XHRzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cdFx0XHRzZWwuYWRkUmFuZ2UoIHJhbmdlICk7XG5cdFx0fSwgdGhpcy5kZWxheSApO1xuXHR9XG5cbn1cbiJdfQ==