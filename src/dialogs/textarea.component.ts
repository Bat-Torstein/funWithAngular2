import { Component, Input, ViewChild } from "@angular/core";
import { AttributeModel } from "./attributemodel";

@Component({
    selector: "textarea-dialog",
    templateUrl: "./textarea.component.html",
})
export class TextAreaComponent {
    @Input() public attribute: AttributeModel;
    @Input() public display = false;

    public open() {
        this.display = true;
    }

    public close() {
        this.display = false;
    }
}
