import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'
import { Item } from '../models/item'
import { TreeSelector } from '../list/treeselector';
import * as _ from 'underscore';

@Component({
    selector: 'item-list',
    providers: [TreeSelector],
    template: `
<input #testInput [(ngModel)] = "textValue" (keyup.enter)="upperText()" />
<span>{{testInput.value}}</span>
<ul>
    <li *ngFor = "let item of items">
        <list-item [item] ="item"></list-item>
    </li>
</ul>

<h4>Selected items:</h4>
<ul>
    <li *ngFor = "let item of treeSelector.selectedItems | maptoiterable">
        {{item.name}}
    </li>
</ul>
` 
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