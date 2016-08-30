import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../models/item';
import { TreeSelector } from '../models/treeSelector';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'listitem.component.html'
})

export class ListItemComponent {
    @Input() item: Item;
    @Input() treeselector: TreeSelector;
    open: boolean;

    constructor() {
        this.open = false;
    }

    canOpen() {
        return this.item.children && this.item.children.length && !this.open;
    }

    canClose() {
        return this.item.children && this.item.children.length && this.open;
    }

    isSelected() {
        return this.treeselector.isSelected(this.item.id);
    }

    onClick(event: MouseEvent) {
        if (this.item.children && this.item.children.length) {
            this.open = !this.open;
        }
        if (event.ctrlKey) {
            this.treeselector.multiSelect(this.item);
        } else {
            this.treeselector.singleSelect(this.item);
        }
    }
} 