import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    private _elementRef;
    delay: number;
    disableControl: boolean;
    disabled: boolean;
    autoFocusOn: boolean;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[autoFocusOn]", ["autoFocusOn"], { "delay": "delay"; "disableControl": "disableControl"; "disabled": "disabled"; "autoFocusOn": "autoFocusOn"; }, {}, never, never, false>;
}
