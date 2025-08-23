import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HourMeridiemPipe implements PipeTransform {
    /**
     * @param {number} hour
     * @return {string}
     */
    transform(hour: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<HourMeridiemPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HourMeridiemPipe, "hourMeridiem", false>;
}
