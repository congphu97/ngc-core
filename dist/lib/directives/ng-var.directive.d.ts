import { ViewContainerRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgVarDirective {
    private _vcRef;
    private _templateRef;
    private _context;
    set ngVar(context: any);
    /**
     * @constructor
     * @param {ViewContainerRef} _vcRef
     * @param {TemplateRef} _templateRef
     */
    constructor(_vcRef: ViewContainerRef, _templateRef: TemplateRef<any>);
    /**
     * @return {void}
     */
    private _updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgVarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgVarDirective, "[ngVar]", ["ngVar"], { "ngVar": "ngVar"; }, {}, never>;
}
