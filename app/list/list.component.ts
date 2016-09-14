import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service'
import { Item} from '../models/item'
import { TreeSelector} from '../list/treeselector';
import { FormsModule } from '@angular/forms';
import { htmlTemplate } from './list.component.html';
import * as _ from 'underscore';

@Component({
    selector: 'list',
    template: htmlTemplate,
    providers: [TreeSelector],
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