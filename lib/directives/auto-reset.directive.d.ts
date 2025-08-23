import { OnInit, OnDestroy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AutoResetDirective implements OnInit, OnDestroy {
    formControl: UntypedFormControl;
    delay: number;
    autoReset: 'init' | 'destroy';
    /**
     * @constructor
     */
    ngOnInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoResetDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoResetDirective, "[autoReset]", ["autoReset"], { "formControl": "formControl"; "delay": "delay"; "autoReset": "autoReset"; }, {}, never, never, false>;
}
