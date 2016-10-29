import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Modal } from 'ng2-modal';
import { AttributeModel } from './attributemodel';

@Component({
    selector: 'attribute-dialog',
    template: `
<modal title="Attributes"
       modalClass="modal-lg"
       [hideCloseButton]="false"
       [closeOnEscape]="false"
       [closeOnOutsideClick]="false">
    <modal-content>
        <form #form="ngForm">
            <table class="table">
                <thead><tr><th>Attribute name</th><th>Attribute value</th></tr></thead>
                <tbody>
                    <tr attribute-row *ngFor="let attribute of attributes" [name]="attribute.name" [ngModel]="attribute"></tr>
                </tbody>
            </table>
        </form>           
    </modal-content>
    <modal-footer>
        <button class="btn btn-default" (click)="cancel()">Cancel</button>
        <button class="btn btn-primary" (click)="save()" type="submit" [disabled]="!form.valid">Ok</button>
    </modal-footer>
</modal>
`
})
export class AttributeDialogComponent {
    @ViewChild(Modal) modal: Modal;
    @ViewChild(NgForm) form: NgForm;
   
    attributes: AttributeModel[];

    constructor(private toastsManager: ToastsManager) {
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
       this.toastsManager.success("Jau!");
       this.modal.close();
    }

    isValid() {
        if (this.form) {
            return this.form.valid ? "Valid" : "Not Valid!";
        }
        return "";
    }
} 