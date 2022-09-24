import { PipeTransform } from '@angular/core';
import { EmptyPipe } from './empty.pipe';
import * as i0 from "@angular/core";
export declare class CapitalizeFirstPipe extends EmptyPipe implements PipeTransform {
    /**
     * @param {string} value
     * @return {string}
     */
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CapitalizeFirstPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CapitalizeFirstPipe, "capitalizeFirst">;
}
