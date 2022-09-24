import { MonoTypeOperatorFunction } from 'rxjs';
export declare const DESTROY_CMP_SUBJECT_NAME: string;
export declare function destroyCmp<T = any>(instance: T, destroyMethodName?: string): void;
export declare function untilCmpDestroyed<T = any, U = any>(instance: T, destroyMethodName?: string): MonoTypeOperatorFunction<U>;
export declare function Unsubscriber(): ClassDecorator;
