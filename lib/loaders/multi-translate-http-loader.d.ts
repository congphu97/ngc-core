import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
export declare class MultiTranslateHttpLoader implements TranslateLoader {
    resources: {
        prefix: string;
        suffix: string;
    }[];
    private _http;
    /**
     * @constructor
     * @param {{prefix: string, suffix: string }[]} resources
     * @param {HttpClient} _http
     */
    constructor(resources: {
        prefix: string;
        suffix: string;
    }[], _http: HttpClient);
    /**
     * @param {string} lang
     * @return {Observable<Record<string, unknown>>}
     */
    getTranslation(lang: string): Observable<Record<string, unknown>>;
}
