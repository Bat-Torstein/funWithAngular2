import {Component} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {
    constructor(private toastsManager: ToastsManager) {

    }
    userConfirms() {
        console.log("User confirms");
        this.toastsManager.success("yay");
    }
} 