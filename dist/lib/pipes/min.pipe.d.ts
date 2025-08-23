import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MinPipe implements PipeTransform {
    /**
     * @param {any[]} items
     * @param {string} field
     * @return {number}
     */
    transform(items: any[], field: string): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<MinPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MinPipe, "min", false>;
}
