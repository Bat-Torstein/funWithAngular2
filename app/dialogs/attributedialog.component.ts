import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    selector: 'attribute-dialog',
    template: `
<p-dialog [(visible)]="display" header="Attributes" modal="modal" width="800" showEffect="fade">
    <form #form="ngForm">
    <table class="table">
        <thead><tr><th>Attribute name</th><th>Attribute value</th></tr></thead>
        <tbody>
            <tr attribute-row *ngFor="let attribute of attributes" [name]="attribute.name" [ngModel]="attribute"></tr>
        </tbody>
    </table>
    </form>           
    <footer>
        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button class="btn btn-default" (click)="cancel()">Cancel</button>
            <button class="btn btn-primary" (click)="save()" type="submit" [disabled]="!form.valid">Ok</button>
        </div>
    </footer>    
</p-dialog>
`
})
export class AttributeDialogComponent {
    @Input() display = false;
    @ViewChild(NgForm) form: NgForm;
    attributes: AttributeModel[];

    constructor() {
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
        this.display = true;
    }

    cancel() {
        this.display = false;
    }

    save() {
       this.cancel();
    }

    isValid() {
        if (this.form) {
            return this.form.valid ? "Valid" : "Not Valid!";
        }
        return "";
    }
} 