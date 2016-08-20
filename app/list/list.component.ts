import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service'
import { Item} from '../models/item'
import { ListItemComponent} from './listitem.component';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html',
    directives: [ListItemComponent]
})

export class ListComponent implements OnInit {
    items: Item[];

    constructor(
        private _itemService: ItemService) { }

    getItems() {
        this._itemService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }
} 