import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UnitPipe implements PipeTransform {
    /**
     * @param {number} num
     * @param {string=} unit
     * @return {string}
     */
    transform(num: number, unit?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<UnitPipe, "unit">;
}
