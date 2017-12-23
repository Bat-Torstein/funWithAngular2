import { Component, OnInit } from "@angular/core";

import * as _ from "underscore";
import { TreeSelector } from "../list/treeselector";
import { Item } from "../models/item";
import { ItemService } from "../services/item.service";

@Component({
    selector: "item-list",
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
`,
})
export class ListComponent implements OnInit {
    private textValue: string;
    private items: Item[];

    constructor(private itemService: ItemService, private treeSelector: TreeSelector) {
    }

    public getItems() {
        this.itemService.getItems().subscribe(
            (item) => this.items = [item],
            (error) => console.error(error));
    }

    public ngOnInit() {
        this.getItems();
        const test = _.random(0, 100);
    }

    public upperText() {
        this.textValue = this.textValue.toUpperCase();
    }
}
