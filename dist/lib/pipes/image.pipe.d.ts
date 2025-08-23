import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ImagePipe implements PipeTransform {
    /**
     * @param {string} url
     * @param {string} defaultImage
     * @return {number}
     */
    transform(url: string, defaultImage: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ImagePipe, "image", false>;
}
