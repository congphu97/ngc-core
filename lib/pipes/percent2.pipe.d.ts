import { PipeTransform } from '@angular/core';
import { PercentPipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class Percent2Pipe extends PercentPipe implements PipeTransform {
    /**
     * @param {string | number} value
     * @param {string=} digitsInfo
     * @param {string=} locale
     * @return {any}
     */
    transform(value: string | number, digitsInfo?: string, locale?: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Percent2Pipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Percent2Pipe, "percent2">;
}
