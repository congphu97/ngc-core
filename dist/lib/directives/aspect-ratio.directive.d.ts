import { ElementRef, AfterContentChecked } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AspectRatioDirective implements AfterContentChecked {
    private _elementRef;
    aspectRatio: string;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @constructor
     */
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AspectRatioDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AspectRatioDirective, "[aspectRatio]", ["aspectRatio"], { "aspectRatio": "aspectRatio"; }, {}, never>;
}
