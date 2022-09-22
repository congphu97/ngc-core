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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcxRSxNQUFNLE9BQU8sa0JBQWtCO0lBTzlCOzs7T0FHRztJQUNILFlBQXFCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVEksVUFBSyxHQUFXLENBQUMsQ0FBQztJQVNsQixDQUFDO0lBRWpEOztPQUVHO0lBQ0gsZUFBZTtRQUNkLElBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRXhFLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSyxRQUFRLENBQUMsYUFBYSxZQUFZLGdCQUFnQjttQkFDdkMsUUFBUSxDQUFDLGFBQWEsWUFBWSxtQkFBbUI7bUJBQ3JELFFBQVEsQ0FBQyxhQUFhLFlBQVksaUJBQWlCLEVBQUc7Z0JBQ3JFLE9BQU87YUFDUDtZQUVELE1BQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUUxRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxLQUFLLFlBQVksbUJBQW1CLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBRXpGLElBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFFLGlCQUFpQixDQUFFO2dCQUFHLE9BQU87WUFFdkQsTUFBTSxLQUFLLEdBQVUsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTVDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBRXhCLE1BQU0sR0FBRyxHQUFjLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUU3QyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7O29GQTNDVyxrQkFBa0I7cUVBQWxCLGtCQUFrQjtBQUVXO0lBQS9CLFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7aURBQTBCO0FBRXhDO0lBQWhCLGFBQWEsRUFBRTs7b0RBQTBCO0FBQ3pCO0lBQWhCLGFBQWEsRUFBRTs7dURBQTZCO3VGQUwxQyxrQkFBa0I7Y0FEOUIsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFOzZEQUdoQixLQUFLO2tCQUFwRCxLQUFLO1lBQ1UsY0FBYztrQkFBN0IsS0FBSztZQUMyQixRQUFRO2tCQUF4QyxLQUFLO1lBQzJCLFdBQVc7a0JBQTNDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIENvZXJjZU51bWJlciwgRGVmYXVsdFZhbHVlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thdXRvRm9jdXNPbl0nLCBleHBvcnRBczogJ2F1dG9Gb2N1c09uJyB9KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIGRlbGF5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUNvbnRyb2w6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvRm9jdXNPbjogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZUNvbnRyb2wgfHwgIXRoaXMuYXV0b0ZvY3VzT24gKSByZXR1cm47XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgICAgICAgICAgICAgICB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5wdXQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKCAwLCBpbnB1dC52YWx1ZS5sZW5ndGggKTtcblxuXHRcdFx0aWYgKCAhaW5wdXQuaGFzQXR0cmlidXRlKCAnY29udGVudGVkaXRhYmxlJyApICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCByYW5nZTogUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG5cdFx0XHRyYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoIGlucHV0ICk7XG5cdFx0XHRyYW5nZS5jb2xsYXBzZSggZmFsc2UgKTtcblxuXHRcdFx0Y29uc3Qgc2VsOiBTZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cblx0XHRcdHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcblx0XHRcdHNlbC5hZGRSYW5nZSggcmFuZ2UgKTtcblx0XHR9LCB0aGlzLmRlbGF5ICk7XG5cdH1cblxufVxuIl19