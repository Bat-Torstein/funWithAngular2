import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
//import { ToastsManager } from 'ng2-toastr';
import { Modal } from 'ng2-modal';
import { AttributeModel} from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'attribute-dialog',
    templateUrl: 'attributedialog.component.html'
})
export class AttributeDialogComponent {
    @ViewChild(Modal) modal: Modal;
   
    attributes: AttributeModel[];

    constructor(/*private toastsManager: ToastsManager*/) {
        this.attributes = [];
        let numeric = new AttributeModel("numeric", "Numeric Attribute", "");
        numeric.validPattern = "^[0-9]+$";
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
       //this.toastsManager.success("Jau!");
       this.modal.close();
    }
} 