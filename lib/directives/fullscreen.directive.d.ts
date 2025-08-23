import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FullscreenDirective {
    private _elementRef;
    isFullscreen: boolean;
    private _fullscreenEnabled;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @return {void}
     */
    toggle(): void;
    /**
     * @return {void}
     */
    on(): void;
    /**
     * @return {void}
     */
    off(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullscreenDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullscreenDirective, "[fullscreen]", ["fullscreen"], {}, {}, never, never, false>;
}
