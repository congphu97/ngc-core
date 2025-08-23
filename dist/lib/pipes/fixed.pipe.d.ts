import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FixedPipe implements PipeTransform {
    /**
     * @param {number} input
     * @param {number=} digits
     * @return {number}
     */
    transform(input: number, digits?: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<FixedPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FixedPipe, "fixed", false>;
}
