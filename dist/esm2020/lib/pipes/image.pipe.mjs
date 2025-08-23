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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsR0FBVyxFQUFFLFlBQW9CO1FBQ2xELE9BQU8sSUFBSSxVQUFVLENBQUUsQ0FBRSxRQUF1QixFQUFHLEVBQUU7WUFDcEQsSUFBSyxDQUFDLEdBQUcsRUFBRztnQkFDWCxRQUFRLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO2dCQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU87YUFDUDtZQUVELE1BQU0sR0FBRyxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7O2tFQXJCVyxTQUFTO3VFQUFULFNBQVM7O0lBT3BCLE9BQU8sRUFBRTs7O29DQUM2QyxVQUFVOzBDQWFoRTt1RkFyQlcsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQVNmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnaW1hZ2UnIH0pXG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRJbWFnZVxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHVybDogc3RyaW5nLCBkZWZhdWx0SW1hZ2U6IHN0cmluZyApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSggKCBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PiApID0+IHtcblx0XHRcdGlmICggIXVybCApIHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggZGVmYXVsdEltYWdlICk7XG5cdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcub25sb2FkID0gKCkgPT4geyBvYnNlcnZlci5uZXh0KCB1cmwgKTsgb2JzZXJ2ZXIuY29tcGxldGUoKTsgfTtcblx0XHRcdGltZy5vbmVycm9yID0gKCkgPT4geyBvYnNlcnZlci5uZXh0KCBkZWZhdWx0SW1hZ2UgKTsgb2JzZXJ2ZXIuY29tcGxldGUoKTsgfTtcblx0XHRcdGltZy5zcmMgPSB1cmw7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==