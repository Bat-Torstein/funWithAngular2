import { Component } from '@angular/core';
import {OverviewComponent} from './overview/overview.component';
import {ItemService} from './services/item.service';
import {htmlTemplate} from './app.component.html';

@Component({
    selector: 'testApp',
    template: htmlTemplate,
    providers: [ItemService]
})

export class AppComponent { } 