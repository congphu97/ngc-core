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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay10ZXh0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGVzL21hcmstdGV4dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdoRCxNQUFNLE9BQU8sWUFBWTtJQUV4Qjs7Ozs7O09BTUc7SUFFSSxTQUFTLENBQUUsSUFBWSxFQUFFLFFBQWdCLEVBQUUsWUFBc0IsRUFBRSxtQkFBNEIsSUFBSTtRQUN6RyxJQUFLLGdCQUFnQixFQUFHO1lBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSyxJQUFJLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLEVBQUc7WUFDdkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDM0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFFLENBQUM7WUFFbkMsTUFBTSxVQUFVLEdBQWEsQ0FBQyxDQUFFLFFBQVEsQ0FBRTtpQkFDekMsS0FBSyxFQUFFO2lCQUNQLGNBQWMsQ0FBRSxJQUFJLENBQUU7aUJBQ3RCLFFBQVEsQ0FBRSxJQUFJLENBQUU7Z0JBQ2pCLGFBQWE7aUJBQ1osR0FBRyxDQUFFLENBQUMsQ0FBRTtpQkFDUixJQUFJLEVBQUU7aUJBQ04sS0FBSyxFQUFFLENBQUM7WUFFVCxJQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUc7Z0JBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNsQixJQUFJLE1BQU0sQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFFLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxFQUFFLEdBQUcsQ0FBRSxFQUNsRSxDQUFFLE9BQWUsRUFBRyxFQUFFLENBQUMsU0FBVSxPQUFRLFNBQVMsQ0FDbEQsQ0FBQzthQUNGO2lCQUFNLElBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxFQUFHO2dCQUN4RCxJQUFJLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBRTtxQkFDZixLQUFLLEVBQUU7cUJBQ1AsS0FBSyxDQUFFLEdBQUcsQ0FBRTtxQkFDWixHQUFHLENBQUUsQ0FBRSxDQUFTLEVBQUUsQ0FBUyxFQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBVSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFO3FCQUM3RyxJQUFJLENBQUUsR0FBRyxDQUFFO3FCQUNYLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7d0VBN0NXLFlBQVk7NkVBQVosWUFBWTs7SUFTdkIsT0FBTyxFQUFFOzs7OzZDQW9DVDt1RkE3Q1csWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVdsQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9tZW1vaXplJztcblxuQFBpcGUoeyBuYW1lOiAnbWFya1RleHQnIH0pXG5leHBvcnQgY2xhc3MgTWFya1RleHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrVGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc1NlYXJjaE1vZGVcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNFc2NhcGVIdG1sVGFnc1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIGh0bWw6IHN0cmluZywgbWFya1RleHQ6IHN0cmluZywgaXNTZWFyY2hNb2RlPzogYm9vbGVhbiwgaXNFc2NhcGVIdG1sVGFnczogYm9vbGVhbiA9IHRydWUgKTogc3RyaW5nIHtcblx0XHRpZiAoIGlzRXNjYXBlSHRtbFRhZ3MgKSB7XG5cdFx0XHRodG1sID0gXy5lc2NhcGUoIGh0bWwgKTtcblx0XHRcdG1hcmtUZXh0ID0gXy5lc2NhcGUoIG1hcmtUZXh0ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBodG1sPy5sZW5ndGggJiYgbWFya1RleHQ/Lmxlbmd0aCApIHtcblx0XHRcdGh0bWwgPSBfLnN0cmlwSHRtbCggaHRtbCApO1xuXHRcdFx0bWFya1RleHQgPSBfLnN0cmlwSHRtbCggbWFya1RleHQgKTtcblxuXHRcdFx0Y29uc3QgYWxsTWF0Y2hlZDogc3RyaW5nW10gPSBfKCBtYXJrVGV4dCApXG5cdFx0XHQuY2hhaW4oKVxuXHRcdFx0LnRvU2VhcmNoUmVnRXhwKCAnZ2knIClcblx0XHRcdC5tYXRjaEFsbCggaHRtbCApXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQubWFwKCAwIClcblx0XHRcdC51bmlxKClcblx0XHRcdC52YWx1ZSgpO1xuXG5cdFx0XHRpZiAoIGFsbE1hdGNoZWQubGVuZ3RoICkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHRcdG5ldyBSZWdFeHAoIF8ubWFwKCBhbGxNYXRjaGVkLCBfLmVzY2FwZVJlZ0V4cCApLmpvaW4oICd8JyApLCAnZycgKSxcblx0XHRcdFx0XHQoIG1hdGNoZWQ6IHN0cmluZyApID0+IGA8bWFyaz4keyBtYXRjaGVkIH08L21hcms+YFxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmICggaXNTZWFyY2hNb2RlICYmIF8uc2VhcmNoKCBodG1sLCBtYXJrVGV4dCApICkge1xuXHRcdFx0XHRodG1sID0gXyggaHRtbCApXG5cdFx0XHRcdC5jaGFpbigpXG5cdFx0XHRcdC5zcGxpdCggJyAnIClcblx0XHRcdFx0Lm1hcCggKCBzOiBzdHJpbmcsIGk6IG51bWJlciApID0+IGkgPCBtYXJrVGV4dC5sZW5ndGggPyBgPG1hcms+JHsgcy5jaGFyQXQoIDAgKSB9PC9tYXJrPmAgKyBzLnNsaWNlKCAxICkgOiBzIClcblx0XHRcdFx0LmpvaW4oICcgJyApXG5cdFx0XHRcdC52YWx1ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBodG1sO1xuXHR9XG5cbn1cbiJdfQ==