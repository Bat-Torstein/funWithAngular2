import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'attribute-details',
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent {
    @Input() form: FormGroup;
    @Input() attribute: AttributeModel;

    isValid(): boolean {
        let formControl = this.form.controls[this.attribute.name];
        return formControl.valid || formControl.pristine;
    }
} 