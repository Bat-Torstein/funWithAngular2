import { Component, ViewChild } from '@angular/core';
import { AttributeDialogComponent } from '../dialogs/attributedialog.component';

@Component({
    selector: 'app-overview',
    template: `
<div class="col-md-3" >
    <item-list>
    </item-list>
</div>
<button class="btn btn-primary" (click)="confirm.open()">TestConfirm</button>
<button class="btn btn-primary" (click)="openAttributes()">TestAttributes</button>
<confirm-dialog 
    #confirm
    title="Confirm" 
    text="Confirm me" 
    (onOk)="userConfirms()">
</confirm-dialog>
<attribute-dialog>
</attribute-dialog>

<span>The attributes form is {{attributeForm.isValid()}}</span>
<p-growl [value]="messages"></p-growl>
`
})
export class OverviewComponent {
    @ViewChild(AttributeDialogComponent) attributeForm : AttributeDialogComponent;
    messages = [];

    userConfirms() {
        this.messages.push({ severity: 'success', summary: 'yay' });
    }

    openAttributes() {
        this.attributeForm.open();
    }
} 
