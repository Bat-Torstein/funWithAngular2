import { Component, ViewChild } from "@angular/core";
import { ConfirmationService } from "primeng/primeng";
import { AttributeDialogComponent } from "../dialogs/attributedialog.component";

@Component({
    selector: "app-overview",
    providers: [ConfirmationService],
    template: `
<div class="col-md-3" >
    <item-list>
    </item-list>
</div>
<button class="btn btn-primary" (click)="openConfirm()">TestConfirm</button>
<button class="btn btn-primary" (click)="openAttributes()">TestAttributes</button>
<p-confirmDialog header="Confirmation" icon="fa fa-question-circle" width="425"></p-confirmDialog>
<attribute-dialog>
</attribute-dialog>

<span>The attributes form is {{attributeForm.isValid()}}</span>
<p-growl [value]="messages"></p-growl>
`,
})
export class OverviewComponent {
    @ViewChild(AttributeDialogComponent) public attributeForm: AttributeDialogComponent;
    private messages = [];
    constructor(private confirmationService: ConfirmationService) {}

    public userConfirms() {
        this.messages.push({ severity: "success", summary: "yay" });
    }

    public openAttributes() {
        this.attributeForm.open();
    }

    public openConfirm() {
        this.confirmationService.confirm({
            message: "Confirm this?",
            accept: () => this.userConfirms(),
        });
    }
}
