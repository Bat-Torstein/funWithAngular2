import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class TreeSelector {
    selectedItems: { [id: number]: Item } = {};

    singleSelect(item: Item) {
        this.selectedItems = {};
        this.selectedItems[item.id] = item;
    }

    multiSelect(item: Item) {
        if (this.isSelected(item.id)) {
            delete this.selectedItems[item.id];
        }
        else {
            this.selectedItems[item.id] = item;
        }
    }

    isSelected(id: number) {
        return this.selectedItems[id] ? true : false;
    }
}
