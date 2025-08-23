import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NetworkService {
    get online$() {
        return merge(fromEvent(window, 'offline').pipe(map(() => false)), fromEvent(window, 'online').pipe(map(() => true)), new Observable((ob) => {
            ob.next(navigator.onLine);
            ob.complete();
        }));
    }
    /**
     * @param {number=} intervalMs
     * @return {void}
     */
    detectOnline(intervalMs = 5000) {
        return new Observable((observer) => {
            interval(intervalMs).subscribe(() => this.online$.subscribe(observer.next.bind(observer)));
        });
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(); };
NetworkService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NetworkService, factory: NetworkService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHckMsTUFBTSxPQUFPLGNBQWM7SUFFMUIsSUFBSSxPQUFPO1FBQ1YsT0FBTyxLQUFLLENBQ1gsU0FBUyxDQUFFLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFFLEVBQ3pELFNBQVMsQ0FBRSxNQUFNLEVBQUUsUUFBUSxDQUFFLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBRSxFQUN2RCxJQUFJLFVBQVUsQ0FBQyxDQUFFLEVBQXFCLEVBQUcsRUFBRTtZQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUM1QixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVksQ0FBRSxhQUFxQixJQUFJO1FBQzdDLE9BQU8sSUFBSSxVQUFVLENBQVUsQ0FBRSxRQUEyQixFQUFHLEVBQUU7WUFDaEUsUUFBUSxDQUFFLFVBQVUsQ0FBRSxDQUFDLFNBQVMsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsQ0FBRSxDQUFFLENBQUM7UUFDcEcsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs0RUFyQlcsY0FBYztvRUFBZCxjQUFjLFdBQWQsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgZnJvbUV2ZW50LCBtZXJnZSwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtTZXJ2aWNlIHtcblxuXHRnZXQgb25saW5lJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbWVyZ2UoXG5cdFx0XHRmcm9tRXZlbnQoIHdpbmRvdywgJ29mZmxpbmUnICkucGlwZSggbWFwKCAoKSA9PiBmYWxzZSApICksXG5cdFx0XHRmcm9tRXZlbnQoIHdpbmRvdywgJ29ubGluZScgKS5waXBlKCBtYXAoICgpID0+IHRydWUgKSApLFxuXHRcdFx0bmV3IE9ic2VydmFibGUoKCBvYjogT2JzZXJ2ZXI8Ym9vbGVhbj4gKSA9PiB7XG5cdFx0XHRcdG9iLm5leHQoIG5hdmlnYXRvci5vbkxpbmUgKTtcblx0XHRcdFx0b2IuY29tcGxldGUoKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcj19IGludGVydmFsTXNcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXRlY3RPbmxpbmUoIGludGVydmFsTXM6IG51bWJlciA9IDUwMDAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KCggb2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+ICkgPT4ge1xuXHRcdFx0aW50ZXJ2YWwoIGludGVydmFsTXMgKS5zdWJzY3JpYmUoICgpID0+IHRoaXMub25saW5lJC5zdWJzY3JpYmUoIG9ic2VydmVyLm5leHQuYmluZCggb2JzZXJ2ZXIgKSApICk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19