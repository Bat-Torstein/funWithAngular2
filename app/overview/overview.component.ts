import { Component, ViewChild } from '@angular/core';
import { AttributeDialogComponent } from '../dialogs/attributedialog.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'app-overview',
    templateUrl: 'overview.component.html'
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
