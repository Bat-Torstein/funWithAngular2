import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { ItemService } from './services/item.service';
import template from './app.component.html!text';

@Component({
    selector: 'test-app',
    template: template,
    providers: [ItemService]
})

export class AppComponent { } 