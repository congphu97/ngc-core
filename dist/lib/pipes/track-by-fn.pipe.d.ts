import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TrackByFnPipe implements PipeTransform {
    /**
     * @param {string} property
     * @return {() => any}
     */
    transform(property: string): (idx: number, item: {
        [key: string]: any;
    }) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackByFnPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrackByFnPipe, "trackByFn", false>;
}
