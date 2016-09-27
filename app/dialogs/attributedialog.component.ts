import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Modal } from 'ng2-modal';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'attribute-dialog',
    templateUrl: 'attributedialog.component.html'
})
export class AttributeDialogComponent implements OnInit{
    @ViewChild(Modal) modal: Modal;
    form: FormGroup;
    attributes: AttributeModel[];

    constructor(private toastsManager: ToastsManager) {
        this.attributes = [];
        let numeric = new AttributeModel("numeric", "Numeric Attribute", "");
        numeric.validPattern = "[0-9]+";
        this.attributes.push(numeric);
        let onlyTextAndNumbers = new AttributeModel("onlyTextAndNumbers", "Only text and numbers", "");
        onlyTextAndNumbers.validPattern = "^[a-zA-Z0-9]*$";
        this.attributes.push(onlyTextAndNumbers);
        let mustHaveValue = new AttributeModel("mustHaveValue", "Must have value", "");
        mustHaveValue.isRequired = true;
        this.attributes.push(mustHaveValue);
    }

    open() {
        this.modal.open();
    }

    cancel() {
        this.modal.close();
    }

    save() {
       this.toastsManager.success("Jau!");
       this.modal.close();
    }

    isValid() : boolean {
        return this.form.valid;
    }

    ngOnInit(): void {
        // Convert to FormGroup:
        let group: any = {};
        this.attributes.forEach(attribute => {
            if (attribute.isRequired) {
                group[attribute.name] = new FormControl(attribute.value || '', Validators.required);
            } else if (attribute.validPattern) {
                group[attribute.name] = new FormControl(attribute.value || '', Validators.pattern(attribute.validPattern));
            } else {
                group[attribute.name] = new FormControl(attribute.value || '');
            }
        });
        this.form = new FormGroup(group);
    }
} 