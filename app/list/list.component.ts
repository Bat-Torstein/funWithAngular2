import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service'
import { Item} from '../models/item'
import { ListItemComponent} from './listitem.component';
import { TreeSelector} from '../models/treeselector';
import { MapToIterablePipe} from '../common/maptoiterable';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html',
    directives: [ListItemComponent],
    pipes: [MapToIterablePipe]
})

export class ListComponent implements OnInit {
    items: Item[];
    treeselector: TreeSelector;

    constructor(private _itemService: ItemService) {
        this.treeselector = new TreeSelector();
    }

    getItems() {
        this._itemService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }
} 