import _ from 'lodash';
// @dynamic
export class FormHelper {
    /**
     * @static
     * @param {any} value
     * @return {any}
     */
    static copyField(value) {
        let v;
        switch (typeof value) {
            case 'object':
                v = _.assign({}, value);
                break;
            case 'number':
                v = Number(value);
                break;
            default:
                v = _.slice(value, 0, value?.length);
                break;
        }
        return v;
    }
    /**
     * @static
     * @param {FormGroup} form
     * @param {boolean=} resetValue - Flag to reset value
     * @return {void}
     */
    static resetForm(form, resetValue = false) {
        resetValue && form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvZm9ybS5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLFdBQVc7QUFDWCxNQUFNLE9BQU8sVUFBVTtJQUV0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBRSxLQUFVO1FBQ2xDLElBQUksQ0FBTSxDQUFDO1FBRVgsUUFBUyxPQUFPLEtBQUssRUFBRztZQUN2QixLQUFLLFFBQVE7Z0JBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsRUFBRSxFQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUMxQixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLENBQUMsR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDUDtnQkFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUUsQ0FBQztnQkFDdkMsTUFBTTtTQUNQO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFFLElBQWUsRUFBRSxhQUFzQixLQUFLO1FBQ3BFLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEZvcm1IZWxwZXIge1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIGNvcHlGaWVsZCggdmFsdWU6IGFueSApIHtcblx0XHRsZXQgdjogYW55O1xuXG5cdFx0c3dpdGNoICggdHlwZW9mIHZhbHVlICkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0diA9IF8uYXNzaWduKCB7fSwgdmFsdWUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHR2ID0gTnVtYmVyKCB2YWx1ZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHYgPSBfLnNsaWNlKCB2YWx1ZSwgMCwgdmFsdWU/Lmxlbmd0aCApO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gdjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlc2V0VmFsdWUgLSBGbGFnIHRvIHJlc2V0IHZhbHVlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHJlc2V0Rm9ybSggZm9ybTogRm9ybUdyb3VwLCByZXNldFZhbHVlOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0cmVzZXRWYWx1ZSAmJiBmb3JtLnJlc2V0KCk7XG5cdFx0Zm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuXHRcdGZvcm0ubWFya0FzVW50b3VjaGVkKCk7XG5cdH1cblxufVxuIl19