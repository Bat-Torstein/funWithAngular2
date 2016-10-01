import { Component, Input} from '@angular/core';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'attribute-table',
    templateUrl: 'attributetable.component.html'
})
export class AttributeTableComponent {
    @Input() attributes: AttributeModel[];
} 