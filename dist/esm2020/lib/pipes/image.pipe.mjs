import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class ImagePipe {
    /**
     * @param {string} url
     * @param {string} defaultImage
     * @return {number}
     */
    transform(url, defaultImage) {
        return new Observable((observer) => {
            if (!url) {
                observer.next(defaultImage);
                observer.complete();
                return;
            }
            const img = new Image();
            img.onload = () => { observer.next(url); observer.complete(); };
            img.onerror = () => { observer.next(defaultImage); observer.complete(); };
            img.src = url;
        });
    }
}
ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
ImagePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "image", type: ImagePipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Observable)
], ImagePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagePipe, [{
        type: Pipe,
        args: [{ name: 'image' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsR0FBVyxFQUFFLFlBQW9CO1FBQ2xELE9BQU8sSUFBSSxVQUFVLENBQUUsQ0FBRSxRQUF1QixFQUFHLEVBQUU7WUFDcEQsSUFBSyxDQUFDLEdBQUcsRUFBRztnQkFDWCxRQUFRLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO2dCQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU87YUFDUDtZQUVELE1BQU0sR0FBRyxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7O2tFQXJCVyxTQUFTO3VFQUFULFNBQVM7QUFRckI7SUFEQyxPQUFPLEVBQUU7OztvQ0FDNkMsVUFBVTswQ0FhaEU7dUZBckJXLFNBQVM7Y0FEckIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFTZixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2ltYWdlJyB9KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0SW1hZ2Vcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCB1cmw6IHN0cmluZywgZGVmYXVsdEltYWdlOiBzdHJpbmcgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7XG5cdFx0XHRpZiAoICF1cmwgKSB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIGRlZmF1bHRJbWFnZSApO1xuXHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9ICgpID0+IHsgb2JzZXJ2ZXIubmV4dCggdXJsICk7IG9ic2VydmVyLmNvbXBsZXRlKCk7IH07XG5cdFx0XHRpbWcub25lcnJvciA9ICgpID0+IHsgb2JzZXJ2ZXIubmV4dCggZGVmYXVsdEltYWdlICk7IG9ic2VydmVyLmNvbXBsZXRlKCk7IH07XG5cdFx0XHRpbWcuc3JjID0gdXJsO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=