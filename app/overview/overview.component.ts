import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import template from './overview.component.html!text';

@Component({
    selector: 'app-overview',
    template: template
})
export class OverviewComponent {
    constructor(private toastsManager: ToastsManager) {
    }

    userConfirms() {
        this.toastsManager.success("yay");
    }
} 