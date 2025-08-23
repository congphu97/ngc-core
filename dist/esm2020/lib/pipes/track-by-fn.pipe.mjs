import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class TrackByFnPipe {
    /**
     * @param {string} property
     * @return {() => any}
     */
    transform(property) {
        return (_idx, item) => property ? _.get(item, property) : item;
    }
}
TrackByFnPipe.ɵfac = function TrackByFnPipe_Factory(t) { return new (t || TrackByFnPipe)(); };
TrackByFnPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "trackByFn", type: TrackByFnPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Function)
], TrackByFnPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackByFnPipe, [{
        type: Pipe,
        args: [{ name: 'trackByFn' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYnktZm4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdHJhY2stYnktZm4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGFBQWE7SUFFekI7OztPQUdHO0lBRUksU0FBUyxDQUFFLFFBQWdCO1FBQ2pDLE9BQU8sQ0FBRSxJQUFZLEVBQUUsSUFBOEIsRUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLENBQUM7OzBFQVRXLGFBQWE7K0VBQWIsYUFBYTs7SUFNeEIsT0FBTyxFQUFFOzs7OzhDQUdUO3VGQVRXLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFRbkIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE1lbW9pemUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL21lbW9pemUnO1xuXG5AUGlwZSh7IG5hbWU6ICd0cmFja0J5Rm4nIH0pXG5leHBvcnQgY2xhc3MgVHJhY2tCeUZuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcblx0ICogQHJldHVybiB7KCkgPT4gYW55fVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBwcm9wZXJ0eTogc3RyaW5nICk6ICggaWR4OiBudW1iZXIsIGl0ZW06IHsgWyBrZXk6IHN0cmluZyBdOiBhbnkgfSApID0+IGFueSB7XG5cdFx0cmV0dXJuICggX2lkeDogbnVtYmVyLCBpdGVtOiB7IFsga2V5OiBzdHJpbmcgXTogYW55IH0gKSA9PiBwcm9wZXJ0eSA/IF8uZ2V0KCBpdGVtLCBwcm9wZXJ0eSApIDogaXRlbTtcblx0fVxuXG59XG4iXX0=