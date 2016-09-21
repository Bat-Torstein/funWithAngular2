import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html'
})

export class OverviewComponent {
    text: string;

    constructor() {
        this.text = "";
        for (var i = 0; i < 10000; i++) {
            this.text += i.toString() + " ";
        }
    }

    userConfirms() {
        console.log("Confirmed");
    }

} 