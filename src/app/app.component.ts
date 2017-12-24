import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';
import { ItemService } from '../services/item.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [ItemService],
})

export class AppComponent { }
