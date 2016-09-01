﻿import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../models/item';
import { TreeSelector } from './treeselector';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'listitem.component.html'
})

export class ListItemComponent {
    @Input() item: Item;
    open: boolean;

    constructor(private treeSelector : TreeSelector) {
        this.open = false;
    }

    canOpen() {
        return this.item.children && this.item.children.length && !this.open;
    }

    canClose() {
        return this.item.children && this.item.children.length && this.open;
    }

    isSelected() {
        return this.treeSelector.isSelected(this.item.id);
    }

    onClick(event: MouseEvent) {
        if (this.item.children && this.item.children.length) {
            this.open = !this.open;
        }
        if (event.ctrlKey) {
            this.treeSelector.multiSelect(this.item);
        } else {
            this.treeSelector.singleSelect(this.item);
        }
    }
} 