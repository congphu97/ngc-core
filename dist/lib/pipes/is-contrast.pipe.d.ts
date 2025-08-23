import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IsContrastPipe implements PipeTransform {
    /**
     * @param {string} hex
     * @param {string} textColor
     * @return {boolean}
     */
    transform(hex: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsContrastPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsContrastPipe, "isContrast", false>;
}
