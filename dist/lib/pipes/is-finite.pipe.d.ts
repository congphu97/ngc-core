import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IsFinitePipe implements PipeTransform {
    /**
     * @param {number} num
     * @return {boolean}
     */
    transform(num: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsFinitePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsFinitePipe, "isFinite">;
}
