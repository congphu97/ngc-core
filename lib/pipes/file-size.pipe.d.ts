import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FileSizePipe implements PipeTransform {
    /**
     * @param {number} input
     * @param {boolean=} isAddZero
     * @return {string}
     */
    transform(input: number, isAddZero?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FileSizePipe, "fileSize", false>;
}
