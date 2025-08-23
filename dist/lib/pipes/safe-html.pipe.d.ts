import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeHtmlPipe implements PipeTransform {
    private _sanitizer;
    /**
     * @constructor
     * @param {DomSanitizer} _sanitizer
     */
    constructor(_sanitizer: DomSanitizer);
    /**
     * @param {string} value
     * @return {SafeHtml}
     */
    transform(value: string): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeHtmlPipe, "safeHtml", false>;
}
