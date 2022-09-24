import { Directive, ElementRef, Input } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class AspectRatioDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * @constructor
     */
    ngAfterContentChecked() {
        if (!this.aspectRatio)
            return;
        const element = this._elementRef.nativeElement;
        const elementWidth = element.clientWidth || 0;
        const aspectRatio = _.split(this.aspectRatio, ':');
        if (!aspectRatio[1] || !elementWidth)
            return;
        const height = elementWidth * (+aspectRatio[0] / +aspectRatio[1]);
        element.style.height = `${height}px`;
    }
}
AspectRatioDirective.ɵfac = function AspectRatioDirective_Factory(t) { return new (t || AspectRatioDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AspectRatioDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AspectRatioDirective, selectors: [["", "aspectRatio", ""]], inputs: { aspectRatio: "aspectRatio" }, exportAs: ["aspectRatio"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AspectRatioDirective, [{
        type: Directive,
        args: [{ selector: '[aspectRatio]', exportAs: 'aspectRatio' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { aspectRatio: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNwZWN0LXJhdGlvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9hc3BlY3QtcmF0aW8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUNBLEtBQUssRUFDMUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUd2QixNQUFNLE9BQU8sb0JBQW9CO0lBSWhDOzs7T0FHRztJQUNILFlBQXFCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUksQ0FBQztJQUVqRDs7T0FFRztJQUNILHFCQUFxQjtRQUNwQixJQUFLLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRWhDLE1BQU0sT0FBTyxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxNQUFNLFlBQVksR0FBVyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN0RCxNQUFNLFdBQVcsR0FBYSxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFFLENBQUM7UUFFL0QsSUFBSyxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFlBQVk7WUFBRyxPQUFPO1FBRWpELE1BQU0sTUFBTSxHQUFXLFlBQVksR0FBRyxDQUFFLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFFaEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQztJQUN0QyxDQUFDOzt3RkF6Qlcsb0JBQW9CO3VFQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7NkRBR2hELFdBQVc7a0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIEVsZW1lbnRSZWYsXG5cdEFmdGVyQ29udGVudENoZWNrZWQsIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FzcGVjdFJhdGlvXScsIGV4cG9ydEFzOiAnYXNwZWN0UmF0aW8nIH0pXG5leHBvcnQgY2xhc3MgQXNwZWN0UmF0aW9EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgYXNwZWN0UmF0aW86IHN0cmluZztcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0aWYgKCAhdGhpcy5hc3BlY3RSYXRpbyApIHJldHVybjtcblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGNvbnN0IGVsZW1lbnRXaWR0aDogbnVtYmVyID0gZWxlbWVudC5jbGllbnRXaWR0aCB8fCAwO1xuXHRcdGNvbnN0IGFzcGVjdFJhdGlvOiBzdHJpbmdbXSA9IF8uc3BsaXQoIHRoaXMuYXNwZWN0UmF0aW8sICc6JyApO1xuXG5cdFx0aWYgKCAhYXNwZWN0UmF0aW9bIDEgXSB8fCAhZWxlbWVudFdpZHRoICkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSBlbGVtZW50V2lkdGggKiAoICthc3BlY3RSYXRpb1sgMCBdIC8gK2FzcGVjdFJhdGlvWyAxIF0gKTtcblxuXHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblx0fVxuXG59XG4iXX0=