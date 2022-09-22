import { Directive, Input, ChangeDetectorRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class DisableControlDirective {
    /**
     * @constructor
     * @param {NgControl} _ngControl
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_ngControl, _cdRef) {
        this._ngControl = _ngControl;
        this._cdRef = _cdRef;
    }
    set disableControl(condition) {
        setTimeout(() => {
            this._ngControl.control[condition ? 'disable' : 'enable']();
            this._cdRef.detectChanges();
        });
    }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) { return new (t || DisableControlDirective)(i0.ɵɵdirectiveInject(i1.NgControl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DisableControlDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DisableControlDirective, selectors: [["", "disableControl", ""]], inputs: { disableControl: "disableControl" }, exportAs: ["disableControl"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisableControlDirective, [{
        type: Directive,
        args: [{ selector: '[disableControl]', exportAs: 'disableControl' }]
    }], function () { return [{ type: i1.NgControl }, { type: i0.ChangeDetectorRef }]; }, { disableControl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9kaXNhYmxlLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzNDLE1BQU0sT0FBTyx1QkFBdUI7SUFVbkM7Ozs7T0FJRztJQUNILFlBQXFCLFVBQXFCLEVBQVUsTUFBeUI7UUFBeEQsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQUksQ0FBQztJQWJsRixJQUNJLGNBQWMsQ0FBRSxTQUFrQjtRQUNyQyxVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFDO1lBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDOzs4RkFSVyx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7NEZBSWxFLGNBQWM7a0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZGlzYWJsZUNvbnRyb2xdJywgZXhwb3J0QXM6ICdkaXNhYmxlQ29udHJvbCcgfSlcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29udHJvbERpcmVjdGl2ZSB7XG5cblx0QElucHV0KClcblx0c2V0IGRpc2FibGVDb250cm9sKCBjb25kaXRpb246IGJvb2xlYW4gKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy5fbmdDb250cm9sLmNvbnRyb2xbIGNvbmRpdGlvbiA/ICdkaXNhYmxlJyA6ICdlbmFibGUnIF0oKTtcblx0XHRcdHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7TmdDb250cm9sfSBfbmdDb250cm9sXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX25nQ29udHJvbDogTmdDb250cm9sLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG59XG4iXX0=