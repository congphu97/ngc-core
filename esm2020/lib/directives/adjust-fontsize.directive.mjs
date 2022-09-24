import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class AdjustFontsizeDirective {
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
        const element = this._elementRef.nativeElement;
        const elementWidth = element.clientWidth || 0;
        const parentWidth = (element.parentElement.clientWidth || 0)
            - (element.nextElementSibling.clientWidth || 0)
            - (element.previousElementSibling.clientWidth || 0);
        if (elementWidth <= 0 || parentWidth <= 0 || elementWidth <= parentWidth)
            return;
        const newFontsize = parseFloat(element.style.fontSize)
            * (parentWidth / elementWidth);
        element.style.fontSize = `${newFontsize}px`;
        element.style.lineHeight = `${newFontsize}px`;
    }
}
AdjustFontsizeDirective.ɵfac = function AdjustFontsizeDirective_Factory(t) { return new (t || AdjustFontsizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AdjustFontsizeDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AdjustFontsizeDirective, selectors: [["", "adjustFontsize", ""]], exportAs: ["adjustFontsize"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdjustFontsizeDirective, [{
        type: Directive,
        args: [{ selector: '[adjustFontsize]', exportAs: 'adjustFontsize' }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRqdXN0LWZvbnRzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9hZGp1c3QtZm9udHNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7QUFHM0UsTUFBTSxPQUFPLHVCQUF1QjtJQUVuQzs7O09BR0c7SUFDSCxZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUFJLENBQUM7SUFFakQ7O09BRUc7SUFDSCxxQkFBcUI7UUFDcEIsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzVELE1BQU0sWUFBWSxHQUFXLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELE1BQU0sV0FBVyxHQUFXLENBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFFO2NBQ25FLENBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUU7Y0FDL0MsQ0FBRSxPQUFPLENBQUMsc0JBQXNCLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBRSxDQUFDO1FBRXZELElBQUssWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxXQUFXO1lBQUcsT0FBTztRQUVuRixNQUFNLFdBQVcsR0FBVyxVQUFVLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUU7Y0FDNUQsQ0FBRSxXQUFXLEdBQUcsWUFBWSxDQUFFLENBQUM7UUFFbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxXQUFXLElBQUksQ0FBQztRQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLFdBQVcsSUFBSSxDQUFDO0lBQy9DLENBQUM7OzhGQXpCVyx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FkanVzdEZvbnRzaXplXScsIGV4cG9ydEFzOiAnYWRqdXN0Rm9udHNpemUnIH0pXG5leHBvcnQgY2xhc3MgQWRqdXN0Rm9udHNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Y29uc3QgZWxlbWVudFdpZHRoOiBudW1iZXIgPSBlbGVtZW50LmNsaWVudFdpZHRoIHx8IDA7XG5cdFx0Y29uc3QgcGFyZW50V2lkdGg6IG51bWJlciA9ICggZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAgKVxuXHRcdFx0LSAoIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWVudFdpZHRoIHx8IDAgKVxuXHRcdFx0LSAoIGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGllbnRXaWR0aCB8fCAwICk7XG5cblx0XHRpZiAoIGVsZW1lbnRXaWR0aCA8PSAwIHx8IHBhcmVudFdpZHRoIDw9IDAgfHwgZWxlbWVudFdpZHRoIDw9IHBhcmVudFdpZHRoICkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgbmV3Rm9udHNpemU6IG51bWJlciA9IHBhcnNlRmxvYXQoIGVsZW1lbnQuc3R5bGUuZm9udFNpemUgKVxuXHRcdFx0ICogKCBwYXJlbnRXaWR0aCAvIGVsZW1lbnRXaWR0aCApO1xuXG5cdFx0ZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke25ld0ZvbnRzaXplfXB4YDtcblx0XHRlbGVtZW50LnN0eWxlLmxpbmVIZWlnaHQgPSBgJHtuZXdGb250c2l6ZX1weGA7XG5cdH1cblxufVxuIl19