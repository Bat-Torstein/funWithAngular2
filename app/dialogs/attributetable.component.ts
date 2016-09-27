import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'attribute-table',
    templateUrl: 'attributetable.component.html'
})
export class AttributeTableComponent {
    @Input() form: FormGroup;
    @Input() attributes: AttributeModel[];
} 