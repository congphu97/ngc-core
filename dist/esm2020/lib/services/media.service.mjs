import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const BREAKPOINTS = {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920,
};
export class MediaService {
    /**
     * @constructor
     */
    constructor() {
        this._media = window.innerWidth;
    }
    /**
     * @param {number} breakpoint - Breakpoint to check
     * @return {boolean}
     */
    is(breakpoint) {
        this._media = window.innerWidth;
        return ((breakpoint === 'xs' && this._media < BREAKPOINTS.xs)
            || (breakpoint === 'gt-xs' && this._media >= BREAKPOINTS.xs)
            || (breakpoint === 'sm' && this._media >= BREAKPOINTS.xs && this._media < BREAKPOINTS.sm)
            || (breakpoint === 'gt-sm' && this._media >= BREAKPOINTS.sm)
            || (breakpoint === 'md' && this._media >= BREAKPOINTS.sm && this._media < BREAKPOINTS.md)
            || (breakpoint === 'gt-md' && this._media >= BREAKPOINTS.md)
            || (breakpoint === 'lg' && this._media >= BREAKPOINTS.md && this._media < BREAKPOINTS.lg)
            || (breakpoint === 'gt-lg' && this._media >= BREAKPOINTS.lg));
    }
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    gt(width) {
        this._media = window.innerWidth;
        return this._media >= width;
    }
    /**
     * @param {number} width - Width to check
     * @return {boolean}
     */
    lt(width) {
        this._media = window.innerWidth;
        return this._media < width;
    }
    /**
     * @param {number} width - Viewport width
     * @return {void}
     */
    setViewPort(width) {
        // In case browser resizing
        if (window.innerWidth < screen.width) {
            document.body.classList.add('resizing');
            return;
        }
        // In case real devices
        const meta = document.head.querySelector('meta[name=viewport]');
        let viewPort = 'width=device-width, initial-scale=1.0, user-scalable=0';
        if (width) {
            const scale = window.innerWidth / width;
            viewPort = 'width='
                + width
                + ', minimum-scale='
                + scale
                + ', initial-scale='
                + scale
                + ', maximum-scale=1.0';
        }
        meta.setAttribute('content', viewPort);
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(); };
MediaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLFdBQVcsR0FBZ0M7SUFDaEQsRUFBRSxFQUFFLEdBQUc7SUFDUCxFQUFFLEVBQUUsR0FBRztJQUNQLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7Q0FDUixDQUFDO0FBR0YsTUFBTSxPQUFPLFlBQVk7SUFJeEI7O09BRUc7SUFDSDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksRUFBRSxDQUFFLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUVoQyxPQUFPLENBQUUsQ0FBRSxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUM1RCxDQUFFLFVBQVUsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQzNELENBQUUsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFFO2VBQ3hGLENBQUUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDM0QsQ0FBRSxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUU7ZUFDeEYsQ0FBRSxVQUFVLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUMzRCxDQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBRTtlQUN4RixDQUFFLFVBQVUsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFFLENBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksRUFBRSxDQUFFLEtBQWE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEVBQUUsQ0FBRSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUUsS0FBYTtRQUNoQywyQkFBMkI7UUFDM0IsSUFBSyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUc7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDO1lBQzFDLE9BQU87U0FDUDtRQUVELHVCQUF1QjtRQUN2QixNQUFNLElBQUksR0FBb0IsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUscUJBQXFCLENBQUUsQ0FBQztRQUVuRixJQUFJLFFBQVEsR0FBVyx3REFBd0QsQ0FBQztRQUVoRixJQUFLLEtBQUssRUFBRztZQUNaLE1BQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBRWhELFFBQVEsR0FBRyxRQUFRO2tCQUNoQixLQUFLO2tCQUNMLGtCQUFrQjtrQkFDbEIsS0FBSztrQkFDTCxrQkFBa0I7a0JBQ2xCLEtBQUs7a0JBQ0wscUJBQXFCLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFFLFNBQVMsRUFBRSxRQUFRLENBQUUsQ0FBQztJQUMxQyxDQUFDOzt3RUEzRVcsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWTt1RkFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEJSRUFLUE9JTlRTOiB7IFsga2V5OiBzdHJpbmcgXTogbnVtYmVyIH0gPSB7XG5cdHhzOiA2MDAsXG5cdHNtOiA5NjAsXG5cdG1kOiAxMjgwLFxuXHRsZzogMTkyMCxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgX21lZGlhOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fbWVkaWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnJlYWtwb2ludCAtIEJyZWFrcG9pbnQgdG8gY2hlY2tcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHB1YmxpYyBpcyggYnJlYWtwb2ludDogc3RyaW5nICk6IGJvb2xlYW4ge1xuXHRcdHRoaXMuX21lZGlhID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRyZXR1cm4gKCAoIGJyZWFrcG9pbnQgPT09ICd4cycgJiYgdGhpcy5fbWVkaWEgPCBCUkVBS1BPSU5UUy54cyApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdndC14cycgJiYgdGhpcy5fbWVkaWEgPj0gQlJFQUtQT0lOVFMueHMgKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnc20nICYmIHRoaXMuX21lZGlhID49IEJSRUFLUE9JTlRTLnhzICYmIHRoaXMuX21lZGlhIDwgQlJFQUtQT0lOVFMuc20gKVxuXHRcdFx0fHwgKCBicmVha3BvaW50ID09PSAnZ3Qtc20nICYmIHRoaXMuX21lZGlhID49IEJSRUFLUE9JTlRTLnNtIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ21kJyAmJiB0aGlzLl9tZWRpYSA+PSBCUkVBS1BPSU5UUy5zbSAmJiB0aGlzLl9tZWRpYSA8IEJSRUFLUE9JTlRTLm1kIClcblx0XHRcdHx8ICggYnJlYWtwb2ludCA9PT0gJ2d0LW1kJyAmJiB0aGlzLl9tZWRpYSA+PSBCUkVBS1BPSU5UUy5tZCApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdsZycgJiYgdGhpcy5fbWVkaWEgPj0gQlJFQUtQT0lOVFMubWQgJiYgdGhpcy5fbWVkaWEgPCBCUkVBS1BPSU5UUy5sZyApXG5cdFx0XHR8fCAoIGJyZWFrcG9pbnQgPT09ICdndC1sZycgJiYgdGhpcy5fbWVkaWEgPj0gQlJFQUtQT0lOVFMubGcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFdpZHRoIHRvIGNoZWNrXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRwdWJsaWMgZ3QoIHdpZHRoOiBudW1iZXIgKTogYm9vbGVhbiB7XG5cdFx0dGhpcy5fbWVkaWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRyZXR1cm4gdGhpcy5fbWVkaWEgPj0gd2lkdGg7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggdG8gY2hlY2tcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHB1YmxpYyBsdCggd2lkdGg6IG51bWJlciApOiBib29sZWFuIHtcblx0XHR0aGlzLl9tZWRpYSA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHJldHVybiB0aGlzLl9tZWRpYSA8IHdpZHRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFZpZXdwb3J0IHdpZHRoXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0Vmlld1BvcnQoIHdpZHRoOiBudW1iZXIgKSB7XG5cdFx0Ly8gSW4gY2FzZSBicm93c2VyIHJlc2l6aW5nXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IHNjcmVlbi53aWR0aCApIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ3Jlc2l6aW5nJyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEluIGNhc2UgcmVhbCBkZXZpY2VzXG5cdFx0Y29uc3QgbWV0YTogSFRNTE1ldGFFbGVtZW50ID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCAnbWV0YVtuYW1lPXZpZXdwb3J0XScgKTtcblxuXHRcdGxldCB2aWV3UG9ydDogc3RyaW5nID0gJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCc7XG5cblx0XHRpZiAoIHdpZHRoICkge1xuXHRcdFx0Y29uc3Qgc2NhbGU6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2lkdGg7XG5cblx0XHRcdHZpZXdQb3J0ID0gJ3dpZHRoPSdcblx0XHRcdFx0KyB3aWR0aFxuXHRcdFx0XHQrICcsIG1pbmltdW0tc2NhbGU9J1xuXHRcdFx0XHQrIHNjYWxlXG5cdFx0XHRcdCsgJywgaW5pdGlhbC1zY2FsZT0nXG5cdFx0XHRcdCsgc2NhbGVcblx0XHRcdFx0KyAnLCBtYXhpbXVtLXNjYWxlPTEuMCc7XG5cdFx0fVxuXG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoICdjb250ZW50Jywgdmlld1BvcnQgKTtcblx0fVxuXG59XG4iXX0=