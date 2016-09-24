import { Component, ViewChild } from '@angular/core';
import { ConfirmDialogComponent} from '../dialogs/confirmdialog.component';

@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {
    @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;

    userConfirm() {
        let response = this.confirmDialog.confirm("Confirm", "Mordi?");
        response.subscribe(ok => {
            if (ok) {
                console.log("User confirms");
            }
            response.unsubscribe();
        });
    }
} 