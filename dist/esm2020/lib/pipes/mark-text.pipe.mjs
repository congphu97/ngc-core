import { __decorate, __metadata } from "tslib";
import _ from 'lodash';
import { Pipe } from '@angular/core';
import { Memoize } from '../decorators/memoize';
import * as i0 from "@angular/core";
export class MarkTextPipe {
    /**
     * @param {string} html
     * @param {string} markText
     * @param {boolean=} isSearchMode
     * @param {boolean=} isEscapeHtmlTags
     * @return {string}
     */
    transform(html, markText, isSearchMode, isEscapeHtmlTags = true) {
        if (isEscapeHtmlTags) {
            html = _.escape(html);
            markText = _.escape(markText);
        }
        if (html?.length && markText?.length) {
            html = _.stripHtml(html);
            markText = _.stripHtml(markText);
            const allMatched = _(markText)
                .chain()
                .toSearchRegExp('gi')
                .matchAll(html)
                // @ts-ignore
                .map(0)
                .uniq()
                .value();
            if (allMatched.length) {
                html = html.replace(new RegExp(_.map(allMatched, _.escapeRegExp).join('|'), 'g'), (matched) => `<mark>${matched}</mark>`);
            }
            else if (isSearchMode && _.search(html, markText)) {
                html = _(html)
                    .chain()
                    .split(' ')
                    .map((s, i) => i < markText.length ? `<mark>${s.charAt(0)}</mark>` + s.slice(1) : s)
                    .join(' ')
                    .value();
            }
        }
        return html;
    }
}
MarkTextPipe.ɵfac = function MarkTextPipe_Factory(t) { return new (t || MarkTextPipe)(); };
MarkTextPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "markText", type: MarkTextPipe, pure: true });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, Boolean]),
    __metadata("design:returntype", String)
], MarkTextPipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarkTextPipe, [{
        type: Pipe,
        args: [{ name: 'markText' }]
    }], null, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay10ZXh0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL21hcmstdGV4dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7Ozs7O09BTUc7SUFFSSxTQUFTLENBQUUsSUFBWSxFQUFFLFFBQWdCLEVBQUUsWUFBc0IsRUFBRSxtQkFBNEIsSUFBSTtRQUN6RyxJQUFLLGdCQUFnQixFQUFHO1lBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSyxJQUFJLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLEVBQUc7WUFDdkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDM0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFFLENBQUM7WUFFbkMsTUFBTSxVQUFVLEdBQWEsQ0FBQyxDQUFFLFFBQVEsQ0FBRTtpQkFDekMsS0FBSyxFQUFFO2lCQUNQLGNBQWMsQ0FBRSxJQUFJLENBQUU7aUJBQ3RCLFFBQVEsQ0FBRSxJQUFJLENBQUU7Z0JBQ2pCLGFBQWE7aUJBQ1osR0FBRyxDQUFFLENBQUMsQ0FBRTtpQkFDUixJQUFJLEVBQUU7aUJBQ04sS0FBSyxFQUFFLENBQUM7WUFFVCxJQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUc7Z0JBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNsQixJQUFJLE1BQU0sQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFFLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxFQUNsRSxDQUFFLE9BQWUsRUFBRyxFQUFFLENBQUMsU0FBVSxPQUFRLFNBQVMsQ0FDbEQsQ0FBQzthQUNGO2lCQUFNLElBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxFQUFHO2dCQUN4RCxJQUFJLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBRTtxQkFDZixLQUFLLEVBQUU7cUJBQ1AsS0FBSyxDQUFFLEdBQUcsQ0FBRTtxQkFDWixHQUFHLENBQUUsQ0FBRSxDQUFTLEVBQUUsQ0FBUyxFQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBVSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFO3FCQUM3RyxJQUFJLENBQUUsR0FBRyxDQUFFO3FCQUNYLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7d0VBN0NXLFlBQVk7NkVBQVosWUFBWTtBQVV4QjtJQURDLE9BQU8sRUFBRTs7Ozs2Q0FvQ1Q7dUZBN0NXLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFXbEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvbWVtb2l6ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21hcmtUZXh0JyB9KVxuZXhwb3J0IGNsYXNzIE1hcmtUZXh0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWFya1RleHRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNTZWFyY2hNb2RlXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzRXNjYXBlSHRtbFRhZ3Ncblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBodG1sOiBzdHJpbmcsIG1hcmtUZXh0OiBzdHJpbmcsIGlzU2VhcmNoTW9kZT86IGJvb2xlYW4sIGlzRXNjYXBlSHRtbFRhZ3M6IGJvb2xlYW4gPSB0cnVlICk6IHN0cmluZyB7XG5cdFx0aWYgKCBpc0VzY2FwZUh0bWxUYWdzICkge1xuXHRcdFx0aHRtbCA9IF8uZXNjYXBlKCBodG1sICk7XG5cdFx0XHRtYXJrVGV4dCA9IF8uZXNjYXBlKCBtYXJrVGV4dCApO1xuXHRcdH1cblxuXHRcdGlmICggaHRtbD8ubGVuZ3RoICYmIG1hcmtUZXh0Py5sZW5ndGggKSB7XG5cdFx0XHRodG1sID0gXy5zdHJpcEh0bWwoIGh0bWwgKTtcblx0XHRcdG1hcmtUZXh0ID0gXy5zdHJpcEh0bWwoIG1hcmtUZXh0ICk7XG5cblx0XHRcdGNvbnN0IGFsbE1hdGNoZWQ6IHN0cmluZ1tdID0gXyggbWFya1RleHQgKVxuXHRcdFx0LmNoYWluKClcblx0XHRcdC50b1NlYXJjaFJlZ0V4cCggJ2dpJyApXG5cdFx0XHQubWF0Y2hBbGwoIGh0bWwgKVxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0Lm1hcCggMCApXG5cdFx0XHQudW5pcSgpXG5cdFx0XHQudmFsdWUoKTtcblxuXHRcdFx0aWYgKCBhbGxNYXRjaGVkLmxlbmd0aCApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0XHRuZXcgUmVnRXhwKCBfLm1hcCggYWxsTWF0Y2hlZCwgXy5lc2NhcGVSZWdFeHAgKS5qb2luKCAnfCcgKSwgJ2cnICksXG5cdFx0XHRcdFx0KCBtYXRjaGVkOiBzdHJpbmcgKSA9PiBgPG1hcms+JHsgbWF0Y2hlZCB9PC9tYXJrPmBcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZiAoIGlzU2VhcmNoTW9kZSAmJiBfLnNlYXJjaCggaHRtbCwgbWFya1RleHQgKSApIHtcblx0XHRcdFx0aHRtbCA9IF8oIGh0bWwgKVxuXHRcdFx0XHQuY2hhaW4oKVxuXHRcdFx0XHQuc3BsaXQoICcgJyApXG5cdFx0XHRcdC5tYXAoICggczogc3RyaW5nLCBpOiBudW1iZXIgKSA9PiBpIDwgbWFya1RleHQubGVuZ3RoID8gYDxtYXJrPiR7IHMuY2hhckF0KCAwICkgfTwvbWFyaz5gICsgcy5zbGljZSggMSApIDogcyApXG5cdFx0XHRcdC5qb2luKCAnICcgKVxuXHRcdFx0XHQudmFsdWUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaHRtbDtcblx0fVxuXG59XG4iXX0=