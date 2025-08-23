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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvZm9ybS5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLFdBQVc7QUFDWCxNQUFNLE9BQU8sVUFBVTtJQUV0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBRSxLQUFVO1FBQ2xDLElBQUksQ0FBTSxDQUFDO1FBRVgsUUFBUyxPQUFPLEtBQUssRUFBRztZQUN2QixLQUFLLFFBQVE7Z0JBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsRUFBRSxFQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUMxQixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLENBQUMsR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDUDtnQkFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUUsQ0FBQztnQkFDdkMsTUFBTTtTQUNQO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFFLElBQXNCLEVBQUUsYUFBc0IsS0FBSztRQUMzRSxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgRm9ybUhlbHBlciB7XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHthbnl9IHZhbHVlXG5cdCAqIEByZXR1cm4ge2FueX1cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgY29weUZpZWxkKCB2YWx1ZTogYW55ICkge1xuXHRcdGxldCB2OiBhbnk7XG5cblx0XHRzd2l0Y2ggKCB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHR2ID0gXy5hc3NpZ24oIHt9LCB2YWx1ZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdHYgPSBOdW1iZXIoIHZhbHVlICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0diA9IF8uc2xpY2UoIHZhbHVlLCAwLCB2YWx1ZT8ubGVuZ3RoICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiB2O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1cblx0ICogQHBhcmFtIHtib29sZWFuPX0gcmVzZXRWYWx1ZSAtIEZsYWcgdG8gcmVzZXQgdmFsdWVcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgcmVzZXRGb3JtKCBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwLCByZXNldFZhbHVlOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0cmVzZXRWYWx1ZSAmJiBmb3JtLnJlc2V0KCk7XG5cdFx0Zm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuXHRcdGZvcm0ubWFya0FzVW50b3VjaGVkKCk7XG5cdH1cblxufVxuIl19