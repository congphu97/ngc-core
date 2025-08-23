import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class KUnitPipe implements PipeTransform {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input: number, isAddZero?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<KUnitPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KUnitPipe, "kUnit", false>;
}
