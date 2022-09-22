import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
const doc = document;
export class FullscreenDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._fullscreenEnabled = doc.fullscreenEnabled
            || doc.documentElement.webkitRequestFullScreen
            || doc.mozFullScreenEnabled
            || doc.msFullscreenEnable;
    }
    /**
     * @return {void}
     */
    toggle() {
        this.isFullscreen ? this.off() : this.on();
    }
    /**
     * @return {void}
     */
    on() {
        if (!this._fullscreenEnabled)
            return;
        const element = this._elementRef.nativeElement;
        this.isFullscreen = true;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    /**
     * @return {void}
     */
    off() {
        if (!this._fullscreenEnabled)
            return;
        this.isFullscreen = false;
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        }
    }
}
FullscreenDirective.ɵfac = function FullscreenDirective_Factory(t) { return new (t || FullscreenDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FullscreenDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullscreenDirective, selectors: [["", "fullscreen", ""]], exportAs: ["fullscreen"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullscreenDirective, [{
        type: Directive,
        args: [{ selector: '[fullscreen]', exportAs: 'fullscreen' }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXRELE1BQU0sR0FBRyxHQUFRLFFBQVEsQ0FBQztBQUcxQixNQUFNLE9BQU8sbUJBQW1CO0lBUy9COzs7T0FHRztJQUNILFlBQXFCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVHBDLHVCQUFrQixHQUFZLEdBQUcsQ0FBQyxpQkFBaUI7ZUFDdkQsR0FBRyxDQUFDLGVBQWUsQ0FBQyx1QkFBdUI7ZUFDM0MsR0FBRyxDQUFDLG9CQUFvQjtlQUN4QixHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFNcUIsQ0FBQztJQUVqRDs7T0FFRztJQUNJLE1BQU07UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxFQUFFO1FBQ1IsSUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRyxPQUFPO1FBRXZDLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRXBELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUssT0FBTyxDQUFDLGlCQUFpQixFQUFHO1lBQ2hDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO2FBQU0sSUFBSyxPQUFPLENBQUMsb0JBQW9CLEVBQUc7WUFDMUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7YUFBTSxJQUFLLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRztZQUM3QyxPQUFPLENBQUMsdUJBQXVCLENBQUksT0FBZ0IsQ0FBQyxvQkFBb0IsQ0FBRSxDQUFDO1NBQzNFO2FBQU0sSUFBSyxPQUFPLENBQUMsbUJBQW1CLEVBQUc7WUFDekMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1QsSUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRyxPQUFPO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUssR0FBRyxDQUFDLGNBQWMsRUFBRztZQUN6QixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDckI7YUFBTSxJQUFLLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRztZQUN0QyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUssR0FBRyxDQUFDLG1CQUFtQixFQUFHO1lBQ3JDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzFCO2FBQU0sSUFBSyxHQUFHLENBQUMsZ0JBQWdCLEVBQUc7WUFDbEMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkI7SUFDRixDQUFDOztzRkE1RFcsbUJBQW1CO3NFQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZG9jOiBhbnkgPSBkb2N1bWVudDtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2Z1bGxzY3JlZW5dJywgZXhwb3J0QXM6ICdmdWxsc2NyZWVuJyB9KVxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5EaXJlY3RpdmUge1xuXG5cdHB1YmxpYyBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBfZnVsbHNjcmVlbkVuYWJsZWQ6IGJvb2xlYW4gPSBkb2MuZnVsbHNjcmVlbkVuYWJsZWRcblx0XHR8fCBkb2MuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXG5cdFx0fHwgZG9jLm1vekZ1bGxTY3JlZW5FbmFibGVkXG5cdFx0fHwgZG9jLm1zRnVsbHNjcmVlbkVuYWJsZTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb24oKSB7XG5cdFx0aWYgKCAhdGhpcy5fZnVsbHNjcmVlbkVuYWJsZWQgKSByZXR1cm47XG5cblx0XHRjb25zdCBlbGVtZW50OiBhbnkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmlzRnVsbHNjcmVlbiA9IHRydWU7XG5cblx0XHRpZiAoIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4gKSB7XG5cdFx0XHRlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0fSBlbHNlIGlmICggZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApIHtcblx0XHRcdGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHR9IGVsc2UgaWYgKCBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuICkge1xuXHRcdFx0ZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiggKCBFbGVtZW50IGFzIGFueSApLkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7XG5cdFx0fSBlbHNlIGlmICggZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuICkge1xuXHRcdFx0ZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb2ZmKCkge1xuXHRcdGlmICggIXRoaXMuX2Z1bGxzY3JlZW5FbmFibGVkICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcblxuXHRcdGlmICggZG9jLmV4aXRGdWxsc2NyZWVuICkge1xuXHRcdFx0ZG9jLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fSBlbHNlIGlmICggZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuICkge1xuXHRcdFx0ZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fSBlbHNlIGlmICggZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4gKSB7XG5cdFx0XHRkb2MubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuXHRcdH0gZWxzZSBpZiAoIGRvYy5tc0V4aXRGdWxsc2NyZWVuICkge1xuXHRcdFx0ZG9jLm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxufVxuIl19