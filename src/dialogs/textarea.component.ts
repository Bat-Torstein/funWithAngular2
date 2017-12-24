import { Component, Input, ViewChild } from "@angular/core";
import { AttributeModel } from "./attributemodel";

@Component({
    selector: "textarea-dialog",
    template: `
<p-dialog [(visible)]="display" [header]="attribute.label" width="800">
    <header>
        {{attribute.label}}
    </header>
    <textarea class="col-md-12" rows="10" [(ngModel)]="attribute.value"></textarea>
    <footer>
        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button class="btn btn-default" (click)="close()">Ok</button>
        </div>
    </footer>
</p-dialog>
`,
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
