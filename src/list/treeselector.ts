import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class TreeSelector {
    public selectedItems: { [id: number]: Item } = {};

    public singleSelect(item: Item) {
        this.selectedItems = {};
        this.selectedItems[item.id] = item;
    }

    public multiSelect(item: Item) {
        if (this.isSelected(item.id)) {
            delete this.selectedItems[item.id];
        } else {
            this.selectedItems[item.id] = item;
        }
    }

    public isSelected(id: number) {
        return this.selectedItems[id] ? true : false;
    }
}
