import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'listitem.component.html'
})

export class ListItemComponent {
    @Input() item : Item;
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

    onClick() {
        if (this.item.children && this.item.children.length) {
            this.open = !this.open;
        }
    }
} 