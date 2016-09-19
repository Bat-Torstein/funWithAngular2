import {Component} from '@angular/core';
import {OverviewComponent} from './overview/overview.component';
import {ItemService} from './services/item.service';

@Component({
    moduleId: module.id,
    selector: 'testApp',
    templateUrl: 'app.component.html',
    providers: [ItemService]
})

export class AppComponent { } 