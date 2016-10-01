import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: '[attribute-row]',
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent {
    @Input() attribute: AttributeModel;
} 