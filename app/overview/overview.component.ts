﻿import {Component} from '@angular/core';

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