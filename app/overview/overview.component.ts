import { Component } from '@angular/core';
import {ListComponent} from '../list/list.component';
import {ListItemComponent} from '../list/listitem.component';
@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html',
    directives: [ListComponent, ListItemComponent]
})

export class OverviewComponent { } 