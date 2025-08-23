import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimeStringPipe implements PipeTransform {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeStringPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimeStringPipe, "timeString", false>;
}
