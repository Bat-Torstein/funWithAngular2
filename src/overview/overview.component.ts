import { Component, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { AttributeDialogComponent } from '../dialogs/attributedialog.component';

@Component({
    selector: 'app-overview',
    providers: [ConfirmationService],
    templateUrl: 'overview.component.html',
})
export class OverviewComponent {
    @ViewChild(AttributeDialogComponent) public attributeForm: AttributeDialogComponent;
    private messages = [];
    constructor(private confirmationService: ConfirmationService) {}

    public userConfirms() {
        this.messages.push({ severity: 'success', summary: 'yay' });
    }

    public openAttributes() {
        this.attributeForm.open();
    }

    public openConfirm() {
        this.confirmationService.confirm({
            message: 'Confirm this?',
            accept: () => this.userConfirms(),
        });
    }
}
