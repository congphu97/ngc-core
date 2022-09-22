import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ConvertPercentPipe implements PipeTransform {
    /**
     * @param {number} input
     * @param {number=} max
     * @param {number=} digits
     * @return {number}
     */
    transform(input: number, max?: number, digits?: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConvertPercentPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ConvertPercentPipe, "convertPercent">;
}
