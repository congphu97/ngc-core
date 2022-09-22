import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PadNumberPipe implements PipeTransform {
    /**
     * @param {number} input
     * @param {boolean} size
     * @return {string}
     */
    transform(input: number, size: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PadNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PadNumberPipe, "padNumber">;
}
