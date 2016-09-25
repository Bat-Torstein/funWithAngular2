import { Component, ViewChild } from '@angular/core';
import { ConfirmDialogComponent} from '../dialogs/confirmdialog.component';

@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {
    userConfirms() {
        console.log("User confirms");
    }
} 