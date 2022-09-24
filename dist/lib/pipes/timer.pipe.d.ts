import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimerPipe implements PipeTransform {
    /**
     * @param {number} miliseconds
     * @return {string}
     */
    transform(miliseconds: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimerPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimerPipe, "timer">;
}
