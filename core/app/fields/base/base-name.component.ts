import {BaseFieldComponent} from './base-field.component';
import {Field} from '@app-common/record/field.model';
import {Record} from '@app-common/record/record.model';

export class BaseNameComponent extends BaseFieldComponent {

    constructor() {
        super();
    }

    getNameField(field: Field, record: Record): string {
        if (!field.value || !record.attributes) {
            return;
        }

        const format = field.value.split(' ');
        const groupField = [];

        format.forEach(item => {
            if (record.attributes[item]) {
                groupField.push(record.attributes[item]);
            }
        });

        return groupField.join(' ');
    }
}
