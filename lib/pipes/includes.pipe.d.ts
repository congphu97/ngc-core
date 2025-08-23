import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IncludesPipe implements PipeTransform {
    /**
     * @param {any[]} arr
     * @param {any} item
     * @return {boolean}
     */
    transform(arr: any[], item: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IncludesPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IncludesPipe, "includes", false>;
}
