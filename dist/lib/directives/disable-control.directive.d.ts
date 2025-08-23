import { ChangeDetectorRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DisableControlDirective {
    private _ngControl;
    private _cdRef;
    set disableControl(condition: boolean);
    /**
     * @constructor
     * @param {NgControl} _ngControl
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_ngControl: NgControl, _cdRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<DisableControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DisableControlDirective, "[disableControl]", ["disableControl"], { "disableControl": "disableControl"; }, {}, never, never, false>;
}
