import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NetworkService {
    get online$(): Observable<boolean>;
    /**
     * @param {number=} intervalMs
     * @return {void}
     */
    detectOnline(intervalMs?: number): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NetworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NetworkService>;
}
