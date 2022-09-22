import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BackButtonDirective {
    /**
     * @constructor
     * @param {Location} _location
     */
    constructor(_location) {
        this._location = _location;
    }
    triggerClick() {
        this._location.back();
    }
}
BackButtonDirective.ɵfac = function BackButtonDirective_Factory(t) { return new (t || BackButtonDirective)(i0.ɵɵdirectiveInject(i1.Location)); };
BackButtonDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BackButtonDirective, selectors: [["", "backButton", ""]], hostBindings: function BackButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BackButtonDirective_click_HostBindingHandler() { return ctx.triggerClick(); });
    } }, exportAs: ["backButton"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackButtonDirective, [{
        type: Directive,
        args: [{ selector: '[backButton]', exportAs: 'backButton' }]
    }], function () { return [{ type: i1.Location }]; }, { triggerClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmVzL2JhY2stYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUczQyxNQUFNLE9BQU8sbUJBQW1CO0lBRS9COzs7T0FHRztJQUNILFlBQXFCLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFBSSxDQUFDO0lBR3RDLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOztzRkFYVyxtQkFBbUI7c0VBQW5CLG1CQUFtQjtnR0FBbkIsa0JBQWM7O3VGQUFkLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7MkRBVXZELFlBQVk7a0JBRGxCLFlBQVk7bUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tiYWNrQnV0dG9uXScsIGV4cG9ydEFzOiAnYmFja0J1dHRvbicgfSlcbmV4cG9ydCBjbGFzcyBCYWNrQnV0dG9uRGlyZWN0aXZlIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7TG9jYXRpb259IF9sb2NhdGlvblxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbiApIHt9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJyApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soKSB7XG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xuXHR9XG5cbn1cbiJdfQ==