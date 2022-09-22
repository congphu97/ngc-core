import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SharedService {
    dataChange$: BehaviorSubject<any>;
    namespaceDataChange$: {
        [key: string]: BehaviorSubject<any>;
    };
    private _data;
    /**
     * @param {string} name
     * @param {any} data
     * @return {void}
     */
    setData(name: string, data: any): void;
    /**
     * @param {string} name
     * @return {any}
     */
    getData(name: string): any;
    /**
     * @param {string} name
     * @return {void}
     */
    removeData(name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedService>;
}
