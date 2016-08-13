﻿import { Component } from '@angular/core';
import {OverviewComponent} from './overview/overview.component';
import {ItemService} from './services/item.service';

@Component({
    selector: 'testApp',
    directives: [OverviewComponent],
    templateUrl: 'app/app.component.html',
    providers: [ItemService]
})

export class AppComponent { } 