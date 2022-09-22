import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MarkTextPipe implements PipeTransform {
    /**
     * @param {string} html
     * @param {string} markText
     * @param {boolean=} isSearchMode
     * @param {boolean=} isEscapeHtmlTags
     * @return {string}
     */
    transform(html: string, markText: string, isSearchMode?: boolean, isEscapeHtmlTags?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkTextPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MarkTextPipe, "markText">;
}
