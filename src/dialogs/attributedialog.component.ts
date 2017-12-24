import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AttributeModel } from "./attributemodel";

@Component({
    selector: "attribute-dialog",
    templateUrl: "attributedialog.component.html",
})
export class AttributeDialogComponent {
    @Input() public display = false;
    @ViewChild(NgForm) public form: NgForm;
    public attributes: AttributeModel[];

    constructor() {
        this.attributes = [];
        const numeric = new AttributeModel("numeric", "Numeric Attribute", "");
        numeric.validPattern = "^[0-9]+$";
        this.attributes.push(numeric);
        const onlyTextAndNumbers = new AttributeModel("onlyTextAndNumbers", "Only text and numbers", "");
        onlyTextAndNumbers.validPattern = "^[a-zA-Z0-9]*$";
        this.attributes.push(onlyTextAndNumbers);
        const mustHaveValue = new AttributeModel("mustHaveValue", "Must have value", "");
        mustHaveValue.isRequired = true;
        this.attributes.push(mustHaveValue);
    }

    public open() {
        this.display = true;
    }

    public cancel() {
        this.display = false;
    }

    public save() {
       this.cancel();
    }

    public isValid() {
        if (this.form) {
            return this.form.valid ? "Valid" : "Not Valid!";
        }
        return "";
    }
}
