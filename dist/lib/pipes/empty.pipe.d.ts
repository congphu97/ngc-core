import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EmptyPipe implements PipeTransform {
    /**
     * @param {any} value
     * @param {string=} emptyStr
     * @return {any}
     */
    transform(value?: any, emptyStr?: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EmptyPipe, "empty", false>;
}
