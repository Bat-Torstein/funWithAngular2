import { Component } from '@angular/core';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {
    constructor(/*private toastsManager: ToastsManager*/) {
    }

    userConfirms() {
        //this.toastsManager.success("yay");
    }
} 