import { Observable } from 'rxjs';
import CryptoJS from 'crypto-js';
import moment from 'moment-timezone';
import _ from 'lodash';
const AES_IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
const AES_HASH_KEY = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
const ACCENTED_CHARACTER_MAP = {
    a: '[aàảãáạăằẳẵắặâầẩẫấậ]',
    d: '[dđ]',
    e: '[eèẻẽéẹêềểễếệ]',
    i: '[iìỉĩíị]',
    o: '[oòỏõóọôồổỗốộơờởỡớợ]',
    u: '[uùủũúụưừửữứự]',
    y: '[yỳỷỹýỵ]',
};
// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const LODASH_MIXIN = {
    aesEncrypt: (data, key = AES_HASH_KEY, opts) => {
        let exp;
        if (opts && _.isString(opts.exp)) {
            const matched = opts.exp.match(/([0-9]+)([a-z]+)/);
            const expNum = Number(_.get(matched, 1));
            const expUnit = _.get(matched, 2);
            exp = expNum ? +moment().add(expNum, expUnit) : undefined;
        }
        data = JSON.stringify({ data, exp, salt: _.get(opts, 'salt') });
        return CryptoJS.AES.encrypt(data, key, { iv: AES_IV }).toString();
    },
    aesDecrypt: (code, key = AES_HASH_KEY, opts) => {
        try {
            const bytes = CryptoJS.AES.decrypt(code, key, { iv: AES_IV });
            let decoded = bytes.toString(CryptoJS.enc.Utf8);
            if (!decoded)
                throw new Error();
            decoded = JSON.parse(decoded);
            if ((decoded.salt && decoded.salt !== _.get(opts, 'salt'))
                || (decoded.exp && moment(decoded.exp).isBefore(moment())))
                throw new Error();
            return decoded.data;
        }
        catch { }
    },
    arrayInsert: (arr, item, index) => {
        arr = _.isArray(arr) ? arr : [];
        index === -1 || _.isNil(index) ? arr.push(item) : arr.splice(index, 0, item);
        return arr;
    },
    arrayJoin: (arr, joinSymbol = ', ') => {
        return _(arr).chain().filter((item) => !_.isNil(item) && item !== '').join(joinSymbol).value();
    },
    arrayUpdate: (arr, item, index) => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index !== -1)
            arr[index] = item;
        return arr;
    },
    arrayUpsert: (arr, item, index, type = 'push') => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index === -1) {
            type === 'push' ? arr.push(item) : arr.unshift(item);
        }
        else {
            arr[index] = item;
        }
        return arr;
    },
    arrayResert: (arr, item, index, type = 'push') => {
        arr = _.isArray(arr) ? arr : [];
        index = _.isNil(index) ? _.indexOf(arr, item) : index;
        if (index === -1) {
            type === 'push' ? arr.push(item) : arr.unshift(item);
        }
        else {
            arr.splice(index, 1);
        }
        return arr;
    },
    coerce: (value, defaultValue) => {
        return value === '' || _.isUndefined(value) ? defaultValue : (_.isNumber(value) ? Number(value) : value);
    },
    escapeRegExp: (str) => {
        return _(str).chain().replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d').value();
    },
    isStrictEmpty: (value) => {
        return _.isNil(value)
            || _.isEqual(value, {})
            || _.isEqual(value, [])
            || _.isEqual(_.trim(value), '');
    },
    matchAll: (regex, value) => {
        if (!regex || !value)
            return [];
        const matches = value.match(new RegExp(regex));
        return _.map(matches, (match) => new RegExp(regex).exec(match));
    },
    search: (str, match) => {
        if (!_.isString(str))
            return false;
        const searchRegExp = _.toSearchRegExp(match);
        return str.search(searchRegExp) >= 0
            || _(str)
                .chain()
                .split(' ')
                .map(0)
                .join('')
                .value()
                .search(searchRegExp) >= 0;
    },
    staticObservable: (value) => {
        return new Observable((observer) => { observer.next(value); observer.complete(); });
    },
    stripAccentedCharacters: (str) => {
        return str?.length
            ? _(str.normalize('NFD'))
                .chain()
                .replace(/\p{Diacritic}/gu, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')
                .value()
            : '';
    },
    stripHtml: (html) => {
        return _.replace(html, /<[^>]*>?/gm, '');
    },
    toCommas: (num, isAddZero = false) => {
        if (!_.isFinite(num))
            return num;
        let n = String(isAddZero ? _.toPadNumber(num, 2) : num);
        n += '';
        const x = _.split(n, '.');
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        let x1 = x[0];
        while (rgx.test(x1)) {
            x1 = _.replace(x1, rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },
    toFileSize: (fileSize, isAddZero = false) => {
        if (!fileSize || _.isNaN(fileSize))
            fileSize = 0;
        let n = fileSize;
        let unit = 'B';
        if (fileSize >= 1073741824) {
            n = fileSize / 1024 / 1024 / 1024;
            unit = 'GB';
        }
        else if (fileSize >= 1048576) {
            n = fileSize / 1024 / 1024;
            unit = 'MB';
        }
        else if (fileSize >= 1024) {
            n = fileSize / 1024;
            unit = 'KB';
        }
        return _(n).chain().toFixed().toCommas(isAddZero).value() + unit;
    },
    toFixed: (num, digits = 2) => {
        if (!_.isFinite(num) || num % 1 === 0)
            return num;
        const numArr = String(num).split('.');
        const first = numArr[0];
        const last = numArr[1].slice(0, digits);
        return Number([first, last].join('.'));
    },
    toKUnit: (num, isAddZero = false) => {
        let n = num;
        let unit = '';
        if (Math.abs(num) >= 1000000000) {
            n = num / 1000000000;
            unit = 'B';
        }
        else if (Math.abs(num) >= 1000000) {
            n = num / 1000000;
            unit = 'M';
        }
        else if (Math.abs(num) >= 1000) {
            n = num / 1000;
            unit = 'K';
        }
        return _(n).chain().toFixed().toCommas(isAddZero).value() + unit;
    },
    toPadNumber: (num, size) => {
        return _.padStart(String(num), size, '0');
    },
    toPercent: (num, max = 100, digits = 2) => {
        return Number((num * max).toFixed(digits));
    },
    toRegExp: (str, flags = 'g') => {
        return new RegExp(_.escapeRegExp(str), flags);
    },
    toRgb: (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = _.replace(hex, shorthandRegex, (_m, r, g, b) => {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : undefined;
    },
    toSearchRegExp: (str, flags = 'gi') => {
        if (_.isEmpty(str))
            return;
        const arr = _.split(str, '');
        _.forEach(arr, (char, index) => {
            arr[index] = ACCENTED_CHARACTER_MAP[_.toLower(char)] || _.escapeRegExp(char);
        });
        return new RegExp(arr.join(''), flags);
    },
    toSearchString: (str, ignoreWhitespace) => {
        str = _(str).chain().stripAccentedCharacters().toLower().value();
        ignoreWhitespace && _.replace(str, / /g, '');
        return str;
    },
};
_.mixin(LODASH_MIXIN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kYXNoLW1peGluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9sb2Rhc2gtbWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE1BQU0sTUFBTSxHQUE0QixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsa0NBQWtDLENBQUUsQ0FBQztBQUNyRyxNQUFNLFlBQVksR0FBNEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFFLGtDQUFrQyxDQUFFLENBQUM7QUFDM0csTUFBTSxzQkFBc0IsR0FBZ0M7SUFDM0QsQ0FBQyxFQUFFLHNCQUFzQjtJQUN6QixDQUFDLEVBQUUsTUFBTTtJQUNULENBQUMsRUFBRSxnQkFBZ0I7SUFDbkIsQ0FBQyxFQUFFLFVBQVU7SUFDYixDQUFDLEVBQUUsc0JBQXNCO0lBQ3pCLENBQUMsRUFBRSxnQkFBZ0I7SUFDbkIsQ0FBQyxFQUFFLFVBQVU7Q0FDYixDQUFDO0FBZ0VGLDJKQUEySjtBQUMzSixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDM0IsVUFBVSxFQUFFLENBQUUsSUFBUyxFQUFFLE1BQWMsWUFBWSxFQUFFLElBQVUsRUFBVyxFQUFFO1FBQzNFLElBQUksR0FBVyxDQUFDO1FBRWhCLElBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxFQUFHO1lBQ3JDLE1BQU0sT0FBTyxHQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDO1lBQ3RFLE1BQU0sTUFBTSxHQUFXLE1BQU0sQ0FBRSxDQUFD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QUUsRUFBRSxDQUFFLEVBQUUsS0FBSyxDQUFFLENBQUM7SUFDNUMsQ0FBQztJQUNELGNBQWMsRUFBRSxDQUFFLEdBQVcsRUFBRSxnQkFBMEIsRUFBVyxFQUFFO1FBQ3JFLEdBQUcsR0FBRyxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuRSxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFFL0MsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0NBQ1EsQ0FBQztBQUVYLENBQUMsQ0FBQyxLQUFLLENBQUUsWUFBWSxDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBBRVNfSVY6IENyeXB0b0pTLldvcmRBcnJheS5pbml0ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZSggJzEwMTExMjEzMTQxNTE2MTcxODE5MWExYjFjMWQxZTFmJyApO1xuY29uc3QgQUVTX0hBU0hfS0VZOiBDcnlwdG9KUy5Xb3JkQXJyYXkuaW5pdCA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoICcwMDAxMDIwMzA0MDUwNjA3MDgwOTBhMGIwYzBkMGUwZicgKTtcbmNvbnN0IEFDQ0VOVEVEX0NIQVJBQ1RFUl9NQVA6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHtcblx0YTogJ1thw6DhuqPDo8Oh4bqhxIPhurHhurPhurXhuq/hurfDouG6p+G6qeG6q+G6peG6rV0nLFxuXHRkOiAnW2TEkV0nLFxuXHRlOiAnW2XDqOG6u+G6vcOp4bq5w6rhu4Hhu4Phu4Xhur/hu4ddJyxcblx0aTogJ1tpw6zhu4nEqcOt4buLXScsXG5cdG86ICdbb8Oy4buPw7XDs+G7jcO04buT4buV4buX4buR4buZxqHhu53hu5/hu6Hhu5vhu6NdJyxcblx0dTogJ1t1w7nhu6fFqcO64bulxrDhu6vhu63hu6/hu6nhu7FdJyxcblx0eTogJ1t54buz4bu34bu5w73hu7VdJyxcbn07XG5cbmRlY2xhcmUgbW9kdWxlICdsb2Rhc2gnIHtcblx0aW50ZXJmYWNlIExvRGFzaFN0YXRpYyB7XG5cdFx0YWVzRW5jcnlwdCggZGF0YTogYW55LCBrZXk/OiBzdHJpbmcsIG9wdHM/OiBhbnkgKTogc3RyaW5nO1xuXHRcdGFlc0RlY3J5cHQoIGNvZGU6IHN0cmluZywga2V5Pzogc3RyaW5nLCBvcHRzPzogYW55ICk6IGFueTtcblx0XHRhcnJheUluc2VydCggYXJyOiBhbnlbXSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyICk6IGFueVtdO1xuXHRcdGFycmF5Sm9pbiggYXJyOiBhbnlbXSwgam9pblN5bWJvbD86IHN0cmluZyApOiBzdHJpbmc7XG5cdFx0YXJyYXlVcGRhdGUoIGFycjogYW55W10sIGl0ZW06IGFueSwgaW5kZXg/OiBudW1iZXIgKTogYW55W107XG5cdFx0YXJyYXlSZXNlcnQoIGFycjogYW55W10sIGl0ZW06IGFueSwgaW5kZXg/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcgKTogYW55W107XG5cdFx0Y29lcmNlKCB2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU/OiBhbnkgKTogYW55O1xuXHRcdGVzY2FwZVJlZ0V4cCggc3RyOiBzdHJpbmcgKTogc3RyaW5nO1xuXHRcdGlzU3RyaWN0RW1wdHkoIHZhbHVlOiBhbnkgKTogYm9vbGVhbjtcblx0XHRtYXRjaEFsbCggcmVnZXg6IFJlZ0V4cCwgdmFsdWU6IHN0cmluZyApOiBhbnlbXTtcblx0XHRzZWFyY2goIHN0cjogc3RyaW5nLCBtYXRjaDogc3RyaW5nICk6IGJvb2xlYW47XG5cdFx0c3RhdGljT2JzZXJ2YWJsZSggdmFsdWU/OiBhbnkgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXHRcdHN0cmlwQWNjZW50ZWRDaGFyYWN0ZXJzKCBzdHI6IHN0cmluZyApOiBzdHJpbmc7XG5cdFx0c3RyaXBIdG1sKCBodG1sOiBzdHJpbmcgKTogc3RyaW5nO1xuXHRcdHRvQ29tbWFzKCBudW06IG51bWJlciwgaXNBZGRaZXJvPzogYm9vbGVhbiApOiBzdHJpbmc7XG5cdFx0dG9GaWxlU2l6ZSggZmlsZVNpemU6IG51bWJlciwgaXNBZGRaZXJvPzogYm9vbGVhbiApOiBzdHJpbmc7XG5cdFx0dG9GaXhlZCggbnVtOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlciApOiBudW1iZXI7XG5cdFx0dG9LVW5pdCggbnVtOiBudW1iZXIsIGlzQWRkWmVybz86IGJvb2xlYW4gKTogc3RyaW5nO1xuXHRcdHRvUGFkTnVtYmVyKCBudW06IG51bWJlciwgc2l6ZTogbnVtYmVyICk6IHN0cmluZztcblx0XHR0b1BlcmNlbnQoIG51bTogbnVtYmVyLCBtYXg/OiBudW1iZXIsIGRpZ2l0cz86IG51bWJlciApOiBudW1iZXI7XG5cdFx0dG9SZWdFeHAoIHN0cjogc3RyaW5nLCBmbGFncz86IHN0cmluZyApOiBSZWdFeHA7XG5cdFx0dG9SZ2IoIGhleDogc3RyaW5nICk6IFJHQjtcblx0XHR0b1NlYXJjaFJlZ0V4cCggc3RyOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nICk6IFJlZ0V4cDtcblx0XHR0b1NlYXJjaFN0cmluZyggc3RyOiBzdHJpbmcsIGlnbm9yZVdoaXRlc3BhY2U/OiBib29sZWFuICk6IHN0cmluZztcblx0fVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5cdGludGVyZmFjZSBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8VFZhbHVlPiB7XG5cdFx0YWVzRW5jcnlwdCgga2V5Pzogc3RyaW5nLCBvcHRzPzogYW55ICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxzdHJpbmc+O1xuXHRcdGFlc0RlY3J5cHQoIGtleT86IHN0cmluZywgb3B0cz86IGFueSApOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8YW55Pjtcblx0XHRhcnJheUluc2VydCggaXRlbTogYW55LCBpbmRleDogbnVtYmVyICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxhbnlbXT47XG5cdFx0YXJyYXlKb2luKCBqb2luU3ltYm9sPzogc3RyaW5nICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxzdHJpbmc+O1xuXHRcdGFycmF5VXBkYXRlKCBpdGVtOiBhbnksIGluZGV4PzogbnVtYmVyICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxhbnlbXT47XG5cdFx0YXJyYXlSZXNlcnQoIGl0ZW06IGFueSwgaW5kZXg/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcgKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPGFueVtdPjtcblx0XHRjb2VyY2UoIGRlZmF1bHRWYWx1ZT86IGFueSApOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8YW55Pjtcblx0XHRlc2NhcGVSZWdFeHAoKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPHN0cmluZz47XG5cdFx0aXNTdHJpY3RFbXB0eSgpOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8Ym9vbGVhbj47XG5cdFx0bWF0Y2hBbGwoIHZhbHVlOiBzdHJpbmcgKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPGFueVtdPjtcblx0XHRzZWFyY2goIG1hdGNoOiBzdHJpbmcgKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPGJvb2xlYW4+O1xuXHRcdHN0YXRpY09ic2VydmFibGUoKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPE9ic2VydmFibGU8YW55Pj47XG5cdFx0c3RyaXBBY2NlbnRlZENoYXJhY3RlcnMoKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPHN0cmluZz47XG5cdFx0c3RyaXBIdG1sKCk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxzdHJpbmc+O1xuXHRcdHRvQ29tbWFzKCBpc0FkZFplcm8/OiBib29sZWFuICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxzdHJpbmc+O1xuXHRcdHRvRmlsZVNpemUoIGZpbGVTaXplOiBudW1iZXIsIGlzQWRkWmVybz86IGJvb2xlYW4gKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPHN0cmluZz47XG5cdFx0dG9GaXhlZCggZGlnaXRzPzogbnVtYmVyICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxudW1iZXI+O1xuXHRcdHRvS1VuaXQoIGlzQWRkWmVybz86IGJvb2xlYW4gKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPHN0cmluZz47XG5cdFx0dG9QYWROdW1iZXIoIHNpemU6IG51bWJlciApOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8c3RyaW5nPjtcblx0XHR0b1BlcmNlbnQoIG1heD86IG51bWJlciwgZGlnaXRzPzogbnVtYmVyICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxudW1iZXI+O1xuXHRcdHRvUmVnRXhwKCBmbGFncz86IHN0cmluZyApOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8UmVnRXhwPjtcblx0XHR0b1JnYigpOiBMb0Rhc2hFeHBsaWNpdFdyYXBwZXI8UkdCPjtcblx0XHR0b1NlYXJjaFJlZ0V4cCggZmxhZ3M/OiBzdHJpbmcgKTogTG9EYXNoRXhwbGljaXRXcmFwcGVyPFJlZ0V4cD47XG5cdFx0dG9TZWFyY2hTdHJpbmcoIGlnbm9yZVdoaXRlc3BhY2U/OiBib29sZWFuICk6IExvRGFzaEV4cGxpY2l0V3JhcHBlcjxzdHJpbmc+O1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUkdCIHtcblx0cjogbnVtYmVyO1xuXHRnOiBudW1iZXI7XG5cdGI6IG51bWJlcjtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC90eXBlZGVmLCBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUsIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBMT0RBU0hfTUlYSU4gPSB7XG5cdGFlc0VuY3J5cHQ6ICggZGF0YTogYW55LCBrZXk6IHN0cmluZyA9IEFFU19IQVNIX0tFWSwgb3B0cz86IGFueSApOiBzdHJpbmcgPT4ge1xuXHRcdGxldCBleHA6IG51bWJlcjtcblxuXHRcdGlmICggb3B0cyAmJiBfLmlzU3RyaW5nKCBvcHRzLmV4cCApICkge1xuXHRcdFx0Y29uc3QgbWF0Y2hlZDogUmVnRXhwRXhlY0FycmF5ID0gb3B0cy5leHAubWF0Y2goIC8oWzAtOV0rKShbYS16XSspLyApO1xuXHRcdFx0Y29uc3QgZXhwTnVtOiBudW1iZXIgPSBOdW1iZXIoIF8uZ2V0KCBtYXRjaGVkLCAxICkgKTtcblx0XHRcdGNvbnN0IGV4cFVuaXQ6IHN0cmluZyA9IF8uZ2V0KCBtYXRjaGVkLCAyICk7XG5cblx0XHRcdGV4cCA9IGV4cE51bSA/ICttb21lbnQoKS5hZGQoIGV4cE51bSwgZXhwVW5pdCApIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGRhdGEsIGV4cCwgc2FsdDogXy5nZXQoIG9wdHMsICdzYWx0JyApIH0pO1xuXG5cdFx0cmV0dXJuIENyeXB0b0pTLkFFUy5lbmNyeXB0KCBkYXRhLCBrZXksIHsgaXY6IEFFU19JViB9ICkudG9TdHJpbmcoKTtcblx0fSxcblx0YWVzRGVjcnlwdDogKCBjb2RlOiBzdHJpbmcsIGtleTogc3RyaW5nID0gQUVTX0hBU0hfS0VZLCBvcHRzPzogYW55ICk6IGFueSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJ5dGVzOiB0eXBlb2YgQ3J5cHRvSlMuQUVTLmRlY3J5cHQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCggY29kZSwga2V5LCB7IGl2OiBBRVNfSVYgfSApO1xuXHRcdFx0bGV0IGRlY29kZWQ6IGFueSA9IGJ5dGVzLnRvU3RyaW5nKCBDcnlwdG9KUy5lbmMuVXRmOCApO1xuXG5cdFx0XHRpZiAoICFkZWNvZGVkICkgdGhyb3cgbmV3IEVycm9yKCk7XG5cblx0XHRcdGRlY29kZWQgPSBKU09OLnBhcnNlKCBkZWNvZGVkICk7XG5cblx0XHRcdGlmICggKCBkZWNvZGVkLnNhbHQgJiYgZGVjb2RlZC5zYWx0ICE9PSBfLmdldCggb3B0cywgJ3NhbHQnICkgKVxuXHRcdFx0XHR8fCAoIGRlY29kZWQuZXhwICYmIG1vbWVudCggZGVjb2RlZC5leHAgKS5pc0JlZm9yZSggbW9tZW50KCkgKSApICkgdGhyb3cgbmV3IEVycm9yKCk7XG5cblx0XHRcdHJldHVybiBkZWNvZGVkLmRhdGE7XG5cdFx0fSBjYXRjaCB7fVxuXHR9LFxuXHRhcnJheUluc2VydDogKCBhcnI6IGFueVtdLCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIgKTogYW55W10gPT4ge1xuXHRcdGFyciA9IF8uaXNBcnJheSggYXJyICkgPyBhcnIgOiBbXTtcblxuXHRcdGluZGV4ID09PSAtMSB8fCBfLmlzTmlsKCBpbmRleCApID8gYXJyLnB1c2goIGl0ZW0gKSA6IGFyci5zcGxpY2UoIGluZGV4LCAwLCBpdGVtICk7XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9LFxuXHRhcnJheUpvaW46ICggYXJyOiBhbnlbXSwgam9pblN5bWJvbDogc3RyaW5nID0gJywgJyApOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBfKCBhcnIgKS5jaGFpbigpLmZpbHRlciggKCBpdGVtOiBhbnkgKSA9PiAhXy5pc05pbCggaXRlbSApICYmIGl0ZW0gIT09ICcnICkuam9pbiggam9pblN5bWJvbCApLnZhbHVlKCk7XG5cdH0sXG5cdGFycmF5VXBkYXRlOiAoIGFycjogYW55W10sIGl0ZW06IGFueSwgaW5kZXg/OiBudW1iZXIgKTogYW55W10gPT4ge1xuXHRcdGFyciA9IF8uaXNBcnJheSggYXJyICkgPyBhcnIgOiBbXTtcblxuXHRcdGluZGV4ID0gXy5pc05pbCggaW5kZXggKSA/IF8uaW5kZXhPZiggYXJyLCBpdGVtICkgOiBpbmRleDtcblxuXHRcdGlmICggaW5kZXggIT09IC0xICkgYXJyWyBpbmRleCBdID0gaXRlbTtcblxuXHRcdHJldHVybiBhcnI7XG5cdH0sXG5cdGFycmF5VXBzZXJ0OiAoIGFycjogYW55W10sIGl0ZW06IGFueSwgaW5kZXg/OiBudW1iZXIsIHR5cGU6IHN0cmluZyA9ICdwdXNoJyApOiBhbnlbXSA9PiB7XG5cdFx0YXJyID0gXy5pc0FycmF5KCBhcnIgKSA/IGFyciA6IFtdO1xuXG5cdFx0aW5kZXggPSBfLmlzTmlsKCBpbmRleCApID8gXy5pbmRleE9mKCBhcnIsIGl0ZW0gKSA6IGluZGV4O1xuXG5cdFx0aWYgKCBpbmRleCA9PT0gLTEgKSB7XG5cdFx0XHR0eXBlID09PSAncHVzaCcgPyBhcnIucHVzaCggaXRlbSApIDogYXJyLnVuc2hpZnQoIGl0ZW0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJyWyBpbmRleCBdID0gaXRlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9LFxuXHRhcnJheVJlc2VydDogKCBhcnI6IGFueVtdLCBpdGVtOiBhbnksIGluZGV4PzogbnVtYmVyLCB0eXBlOiBzdHJpbmcgPSAncHVzaCcgKTogYW55W10gPT4ge1xuXHRcdGFyciA9IF8uaXNBcnJheSggYXJyICkgPyBhcnIgOiBbXTtcblxuXHRcdGluZGV4ID0gXy5pc05pbCggaW5kZXggKSA/IF8uaW5kZXhPZiggYXJyLCBpdGVtICkgOiBpbmRleDtcblxuXHRcdGlmICggaW5kZXggPT09IC0xICkge1xuXHRcdFx0dHlwZSA9PT0gJ3B1c2gnID8gYXJyLnB1c2goIGl0ZW0gKSA6IGFyci51bnNoaWZ0KCBpdGVtICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyci5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFycjtcblx0fSxcblx0Y29lcmNlOiAoIHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZT86IGFueSApOiBhbnkgPT4ge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gJycgfHwgXy5pc1VuZGVmaW5lZCggdmFsdWUgKSA/IGRlZmF1bHRWYWx1ZSA6ICggXy5pc051bWJlciggdmFsdWUgKSA/IE51bWJlciggdmFsdWUgKSA6IHZhbHVlICk7XG5cdH0sXG5cdGVzY2FwZVJlZ0V4cDogKCBzdHI6IHN0cmluZyApOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBfKCBzdHIgKS5jaGFpbigpLnJlcGxhY2UoIC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicgKS5yZXBsYWNlKCAvLS9nLCAnXFxcXHgyZCcgKS52YWx1ZSgpO1xuXHR9LFxuXHRpc1N0cmljdEVtcHR5OiAoIHZhbHVlOiBhbnkgKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIF8uaXNOaWwoIHZhbHVlIClcblx0XHRcdHx8IF8uaXNFcXVhbCggdmFsdWUsIHt9IClcblx0XHRcdHx8IF8uaXNFcXVhbCggdmFsdWUsIFtdIClcblx0XHRcdHx8IF8uaXNFcXVhbCggXy50cmltKCB2YWx1ZSApLCAnJyApO1xuXHR9LFxuXHRtYXRjaEFsbDogKCByZWdleDogUmVnRXhwLCB2YWx1ZTogc3RyaW5nICk6IGFueVtdID0+IHtcblx0XHRpZiAoICFyZWdleCB8fCAhdmFsdWUgKSByZXR1cm4gW107XG5cblx0XHRjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSA9ICggdmFsdWUgYXMgYW55ICkubWF0Y2goIG5ldyBSZWdFeHAoIHJlZ2V4ICkgKTtcblxuXHRcdHJldHVybiBfLm1hcCggbWF0Y2hlcywgKCBtYXRjaDogc3RyaW5nICkgPT4gbmV3IFJlZ0V4cCggcmVnZXggKS5leGVjKCBtYXRjaCApICk7XG5cdH0sXG5cdHNlYXJjaDogKCBzdHI6IHN0cmluZywgbWF0Y2g6IHN0cmluZyApOiBib29sZWFuID0+IHtcblx0XHRpZiAoICFfLmlzU3RyaW5nKCBzdHIgKSApIHJldHVybiBmYWxzZTtcblxuXHRcdGNvbnN0IHNlYXJjaFJlZ0V4cDogUmVnRXhwID0gXy50b1NlYXJjaFJlZ0V4cCggbWF0Y2ggKTtcblxuXHRcdHJldHVybiBzdHIuc2VhcmNoKCBzZWFyY2hSZWdFeHAgKSA+PSAwXG5cdFx0XHR8fCBfKCBzdHIgKVxuXHRcdFx0LmNoYWluKClcblx0XHRcdC5zcGxpdCggJyAnIClcblx0XHRcdC5tYXAoIDAgKVxuXHRcdFx0LmpvaW4oICcnIClcblx0XHRcdC52YWx1ZSgpXG5cdFx0XHQuc2VhcmNoKCBzZWFyY2hSZWdFeHAgKSA+PSAwO1xuXHR9LFxuXHRzdGF0aWNPYnNlcnZhYmxlOiAoIHZhbHVlPzogYW55ICk6IE9ic2VydmFibGU8YW55PiA9PiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPGFueT4oICggb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4gKSA9PiB7IG9ic2VydmVyLm5leHQoIHZhbHVlICk7IG9ic2VydmVyLmNvbXBsZXRlKCk7IH0gKTtcblx0fSxcblx0c3RyaXBBY2NlbnRlZENoYXJhY3RlcnM6ICggc3RyOiBzdHJpbmcgKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gc3RyPy5sZW5ndGhcblx0XHRcdD8gXyggc3RyLm5vcm1hbGl6ZSggJ05GRCcgKSApXG5cdFx0XHQuY2hhaW4oKVxuXHRcdFx0LnJlcGxhY2UoIC9cXHB7RGlhY3JpdGljfS9ndSwgJycgKVxuXHRcdFx0LnJlcGxhY2UoIC/EkS9nLCAnZCcgKVxuXHRcdFx0LnJlcGxhY2UoIC/EkC9nLCAnRCcgKVxuXHRcdFx0LnZhbHVlKClcblx0XHRcdDogJyc7XG5cdH0sXG5cdHN0cmlwSHRtbDogKCBodG1sOiBzdHJpbmcgKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gXy5yZXBsYWNlKCBodG1sLCAvPFtePl0qPj8vZ20sICcnICk7XG5cdH0sXG5cdHRvQ29tbWFzOiAoIG51bTogbnVtYmVyLCBpc0FkZFplcm86IGJvb2xlYW4gPSBmYWxzZSApOiBzdHJpbmcgPT4ge1xuXHRcdGlmICggIV8uaXNGaW5pdGUoIG51bSApICkgcmV0dXJuIG51bSBhcyBhbnk7XG5cblx0XHRsZXQgbjogc3RyaW5nID0gU3RyaW5nKCBpc0FkZFplcm8gPyBfLnRvUGFkTnVtYmVyKCBudW0sIDIgKSA6IG51bSApO1xuXG5cdFx0biArPSAnJztcblxuXHRcdGNvbnN0IHg6IGFueSA9IF8uc3BsaXQoIG4sICcuJyApO1xuXHRcdGNvbnN0IHgyOiBhbnkgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WyAxIF0gOiAnJztcblx0XHRjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XG5cblx0XHRsZXQgeDE6IGFueSA9IHhbIDAgXTtcblxuXHRcdHdoaWxlICggcmd4LnRlc3QoIHgxICkgKSB7XG5cdFx0XHR4MSA9IF8ucmVwbGFjZSggeDEsIHJneCwgJyQxJyArICcsJyArICckMicgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geDEgKyB4Mjtcblx0fSxcblx0dG9GaWxlU2l6ZTogKCBmaWxlU2l6ZTogbnVtYmVyLCBpc0FkZFplcm86IGJvb2xlYW4gPSBmYWxzZSApOiBzdHJpbmcgPT4ge1xuXHRcdGlmICggIWZpbGVTaXplIHx8IF8uaXNOYU4oIGZpbGVTaXplICkgKSBmaWxlU2l6ZSA9IDA7XG5cblx0XHRsZXQgbjogbnVtYmVyID0gZmlsZVNpemU7XG5cdFx0bGV0IHVuaXQ6IHN0cmluZyA9ICdCJztcblxuXHRcdGlmICggZmlsZVNpemUgPj0gMTA3Mzc0MTgyNCApIHtcblx0XHRcdG4gPSBmaWxlU2l6ZSAvIDEwMjQgLyAxMDI0IC8gMTAyNDtcblx0XHRcdHVuaXQgPSAnR0InO1xuXHRcdH0gZWxzZSBpZiAoIGZpbGVTaXplID49IDEwNDg1NzYgKSB7XG5cdFx0XHRuID0gZmlsZVNpemUgLyAxMDI0IC8gMTAyNDtcblx0XHRcdHVuaXQgPSAnTUInO1xuXHRcdH0gZWxzZSBpZiAoIGZpbGVTaXplID49IDEwMjQgKSB7XG5cdFx0XHRuID0gZmlsZVNpemUgLyAxMDI0O1xuXHRcdFx0dW5pdCA9ICdLQic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF8oIG4gKS5jaGFpbigpLnRvRml4ZWQoKS50b0NvbW1hcyggaXNBZGRaZXJvICkudmFsdWUoKSArIHVuaXQ7XG5cdH0sXG5cdHRvRml4ZWQ6ICggbnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyID0gMiApOiBudW1iZXIgPT4ge1xuXHRcdGlmICggIV8uaXNGaW5pdGUoIG51bSApIHx8IG51bSAlIDEgPT09IDAgKSByZXR1cm4gbnVtO1xuXG5cdFx0Y29uc3QgbnVtQXJyOiBzdHJpbmdbXSA9IFN0cmluZyggbnVtICkuc3BsaXQoICcuJyApO1xuXHRcdGNvbnN0IGZpcnN0OiBzdHJpbmcgPSBudW1BcnJbIDAgXTtcblx0XHRjb25zdCBsYXN0OiBzdHJpbmcgPSBudW1BcnJbIDEgXS5zbGljZSggMCwgZGlnaXRzICk7XG5cblx0XHRyZXR1cm4gTnVtYmVyKCBbIGZpcnN0LCBsYXN0IF0uam9pbiggJy4nICkgKTtcblx0fSxcblx0dG9LVW5pdDogKCBudW06IG51bWJlciwgaXNBZGRaZXJvOiBib29sZWFuID0gZmFsc2UgKTogc3RyaW5nID0+IHtcblx0XHRsZXQgbjogbnVtYmVyID0gbnVtO1xuXHRcdGxldCB1bml0OiBzdHJpbmcgPSAnJztcblxuXHRcdGlmICggTWF0aC5hYnMoIG51bSApID49IDEwMDAwMDAwMDAgKSB7XG5cdFx0XHRuID0gbnVtIC8gMTAwMDAwMDAwMDtcblx0XHRcdHVuaXQgPSAnQic7XG5cdFx0fSBlbHNlIGlmICggTWF0aC5hYnMoIG51bSApID49IDEwMDAwMDAgKSB7XG5cdFx0XHRuID0gbnVtIC8gMTAwMDAwMDtcblx0XHRcdHVuaXQgPSAnTSc7XG5cdFx0fSBlbHNlIGlmICggTWF0aC5hYnMoIG51bSApID49IDEwMDAgKSB7XG5cdFx0XHRuID0gbnVtIC8gMTAwMDtcblx0XHRcdHVuaXQgPSAnSyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF8oIG4gKS5jaGFpbigpLnRvRml4ZWQoKS50b0NvbW1hcyggaXNBZGRaZXJvICkudmFsdWUoKSArIHVuaXQ7XG5cdH0sXG5cdHRvUGFkTnVtYmVyOiAoIG51bTogbnVtYmVyLCBzaXplOiBudW1iZXIgKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gXy5wYWRTdGFydCggU3RyaW5nKCBudW0gKSwgc2l6ZSwgJzAnICk7XG5cdH0sXG5cdHRvUGVyY2VudDogKCBudW06IG51bWJlciwgbWF4OiBudW1iZXIgPSAxMDAsIGRpZ2l0czogbnVtYmVyID0gMiApOiBudW1iZXIgPT4ge1xuXHRcdHJldHVybiBOdW1iZXIoICggbnVtICogbWF4ICkudG9GaXhlZCggZGlnaXRzICkgKTtcblx0fSxcblx0dG9SZWdFeHA6ICggc3RyOiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcgPSAnZycgKTogUmVnRXhwID0+IHtcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cCggXy5lc2NhcGVSZWdFeHAoIHN0ciApLCBmbGFncyApO1xuXHR9LFxuXHR0b1JnYjogKCBoZXg6IHN0cmluZyApOiBSR0IgPT4ge1xuXHRcdGNvbnN0IHNob3J0aGFuZFJlZ2V4OiBSZWdFeHAgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuXG5cdFx0aGV4ID0gXy5yZXBsYWNlKCBoZXgsIHNob3J0aGFuZFJlZ2V4LCAoIF9tOiBzdHJpbmcsIHI6IHN0cmluZywgZzogc3RyaW5nLCBiOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRyZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuXHRcdH0gKTtcblxuXHRcdGNvbnN0IHJlc3VsdDogUmVnRXhwRXhlY0FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKCBoZXggKTtcblxuXHRcdHJldHVybiByZXN1bHRcblx0XHRcdD8ge1xuXHRcdFx0XHRyOiBwYXJzZUludCggcmVzdWx0WyAxIF0sIDE2ICksXG5cdFx0XHRcdGc6IHBhcnNlSW50KCByZXN1bHRbIDIgXSwgMTYgKSxcblx0XHRcdFx0YjogcGFyc2VJbnQoIHJlc3VsdFsgMyBdLCAxNiApLFxuXHRcdFx0fVxuXHRcdFx0OiB1bmRlZmluZWQ7XG5cdH0sXG5cdHRvU2VhcmNoUmVnRXhwOiAoIHN0cjogc3RyaW5nLCBmbGFnczogc3RyaW5nID0gJ2dpJyApOiBSZWdFeHAgPT4ge1xuXHRcdGlmICggXy5pc0VtcHR5KCBzdHIgKSApIHJldHVybjtcblxuXHRcdGNvbnN0IGFycjogc3RyaW5nW10gPSBfLnNwbGl0KCBzdHIsICcnICk7XG5cblx0XHRfLmZvckVhY2goIGFyciwgKCBjaGFyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgKSA9PiB7XG5cdFx0XHRhcnJbIGluZGV4IF0gPSBBQ0NFTlRFRF9DSEFSQUNURVJfTUFQWyBfLnRvTG93ZXIoIGNoYXIgKSBdIHx8IF8uZXNjYXBlUmVnRXhwKCBjaGFyICk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoIGFyci5qb2luKCAnJyApLCBmbGFncyApO1xuXHR9LFxuXHR0b1NlYXJjaFN0cmluZzogKCBzdHI6IHN0cmluZywgaWdub3JlV2hpdGVzcGFjZT86IGJvb2xlYW4gKTogc3RyaW5nID0+IHtcblx0XHRzdHIgPSBfKCBzdHIgKS5jaGFpbigpLnN0cmlwQWNjZW50ZWRDaGFyYWN0ZXJzKCkudG9Mb3dlcigpLnZhbHVlKCk7XG5cblx0XHRpZ25vcmVXaGl0ZXNwYWNlICYmIF8ucmVwbGFjZSggc3RyLCAvIC9nLCAnJyApO1xuXG5cdFx0cmV0dXJuIHN0cjtcblx0fSxcbn0gYXMgY29uc3Q7XG5cbl8ubWl4aW4oIExPREFTSF9NSVhJTiApO1xuIl19