import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'
import { Item } from '../models/item'
import { TreeSelector } from '../list/treeselector';
import * as _ from 'underscore';
import template from './list.component.html!text';

@Component({
    selector: 'item-list',
    template: template,
    providers: [TreeSelector]
})
export class ListComponent implements OnInit {
    textValue: string;
    items: Item[];

    constructor(private itemService: ItemService, private treeSelector: TreeSelector) {
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