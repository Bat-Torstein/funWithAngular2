import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service'
import { Item} from '../models/item'

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    items: Item[];
    selectedItem: Item

    constructor(
        private _itemService: ItemService) { }

    getItems() {
        this._itemService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }

    onSelect(item: Item) {
        this.selectedItem = item;
    }
} 