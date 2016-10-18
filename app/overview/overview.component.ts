import { Component, ViewChild } from '@angular/core';
import { AttributeDialogComponent } from '../dialogs/attributedialog.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import template from './overview.component.html!text';

@Component({
    selector: 'app-overview',
    template: template
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
} 