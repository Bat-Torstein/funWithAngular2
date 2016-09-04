import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service'
import { Item} from '../models/item'
import { ListItemComponent} from './listitem.component';
import { TreeSelector} from '../list/treeselector';
import { MapToIterablePipe} from '../common/maptoiterable';
import { FormsModule } from '@angular/forms';
import * as _ from 'underscore';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html',
    providers: [TreeSelector],
    directives: [ListItemComponent],
    pipes: [MapToIterablePipe]
})
export class ListComponent implements OnInit {
    textValue: string;
    items: Item[];

    constructor(private itemService: ItemService, private treeSelector : TreeSelector) {
    }

    getItems() {
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
        var test = _.random(0, 100);
    }

    upperText() {
        this.textValue = this.textValue.toUpperCase();
    }
} 