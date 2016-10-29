import { Component, ViewChild } from '@angular/core';
import { AttributeDialogComponent } from '../dialogs/attributedialog.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-overview',
    template: `
<div class="col-md-3" >
    <item-list>
    </item-list>
</div>
<div class="col-md-9">
    <md-spinner></md-spinner>
</div>
<button class="btn btn-primary" (click)="confirm.open()">TestConfirm</button>
<button class="btn btn-primary" (click)="openAttributes()">TestAttributes</button>
<button class="btn btn-primary" [md-menu-trigger-for]="menu"><span class="glyphicon glyphicon-cog" style="font-size:larger"></span></button>
<confirm-dialog 
    #confirm
    title="Confirm" 
    text="Confirm me" 
    (onOk)="userConfirms()">
</confirm-dialog>
<attribute-dialog>
</attribute-dialog>

<md-menu #menu="mdMenu">
    <button md-menu-item (click)="refresh()"> Refresh </button>
    <button md-menu-item (click)="settings()"> Settings </button>
    <button md-menu-item> Help </button>
    <button md-menu-item disabled> Sign Out </button>
</md-menu>

<span>The attributes form is {{attributeForm.isValid()}}</span>
`
})
export class OverviewComponent {
    @ViewChild(AttributeDialogComponent) attributeForm : AttributeDialogComponent;
    constructor(private toastsManager: ToastsManager) {
    }

    userConfirms() {
        this.toastsManager.success("yay");
    }

    openAttributes() {
        this.attributeForm.open();
    }

    refresh() {
        this.toastsManager.success("Refresh");
    }

    settings() {
        this.toastsManager.success("Settings");
    }
} 
