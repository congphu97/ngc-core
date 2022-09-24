import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgVarDirective {
    /**
     * @constructor
     * @param {ViewContainerRef} _vcRef
     * @param {TemplateRef} _templateRef
     */
    constructor(_vcRef, _templateRef) {
        this._vcRef = _vcRef;
        this._templateRef = _templateRef;
        this._context = {};
    }
    set ngVar(context) {
        this._context.$implicit = this._context.ngVar = context;
        this._updateView();
    }
    /**
     * @return {void}
     */
    _updateView() {
        this._vcRef.clear();
        this._vcRef.createEmbeddedView(this._templateRef, this._context);
    }
}
NgVarDirective.ɵfac = function NgVarDirective_Factory(t) { return new (t || NgVarDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
NgVarDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgVarDirective, selectors: [["", "ngVar", ""]], inputs: { ngVar: "ngVar" }, exportAs: ["ngVar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgVarDirective, [{
        type: Directive,
        args: [{ selector: '[ngVar]', exportAs: 'ngVar' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ngVar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9uZy12YXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsZ0JBQWdCLEVBQzNCLFdBQVcsRUFBRSxLQUFLLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLE9BQU8sY0FBYztJQVcxQjs7OztPQUlHO0lBQ0gsWUFBcUIsTUFBd0IsRUFBVSxZQUE4QjtRQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQWQ3RSxhQUFRLEdBQTRCLEVBQUUsQ0FBQztJQWMwQyxDQUFDO0lBWjFGLElBQ0ksS0FBSyxDQUFFLE9BQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBU0Q7O09BRUc7SUFDSyxXQUFXO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztJQUNwRSxDQUFDOzs0RUF4QlcsY0FBYztpRUFBZCxjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFOzZGQU1oRCxLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsXG5cdFRlbXBsYXRlUmVmLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nVmFyXScsIGV4cG9ydEFzOiAnbmdWYXInIH0pXG5leHBvcnQgY2xhc3MgTmdWYXJEaXJlY3RpdmUge1xuXG5cdHByaXZhdGUgX2NvbnRleHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cblx0QElucHV0KClcblx0c2V0IG5nVmFyKCBjb250ZXh0OiBhbnkgKSB7XG5cdFx0dGhpcy5fY29udGV4dC4kaW1wbGljaXQgPSB0aGlzLl9jb250ZXh0Lm5nVmFyID0gY29udGV4dDtcblxuXHRcdHRoaXMuX3VwZGF0ZVZpZXcoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtWaWV3Q29udGFpbmVyUmVmfSBfdmNSZWZcblx0ICogQHBhcmFtIHtUZW1wbGF0ZVJlZn0gX3RlbXBsYXRlUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+ICkge31cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3VwZGF0ZVZpZXcoKSB7XG5cdFx0dGhpcy5fdmNSZWYuY2xlYXIoKTtcblx0XHR0aGlzLl92Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcoIHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0ICk7XG5cdH1cblxufVxuIl19