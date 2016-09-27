import { Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: '[attribute-row]',
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() attribute: AttributeModel;

    isValid(): boolean {
        let formControl = this.form.controls[this.attribute.name];
        return formControl.valid || formControl.pristine;
    }

    ngOnInit(): void {
        
    }
} 