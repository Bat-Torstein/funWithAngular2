import { Component, OnInit } from "@angular/core";

import * as _ from "underscore";
import { TreeSelector } from "../list/treeselector";
import { Item } from "../models/item";
import { ItemService } from "../services/item.service";

@Component({
    selector: "item-list",
    providers: [TreeSelector],
    templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
    public textValue: string;
    public items: Item[];

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
