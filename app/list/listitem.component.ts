import { 
    Component,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate } from '@angular/core';
import { Item } from '../models/item';
import { TreeSelector } from './treeselector';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'listitem.component.html',
    animations: [
        trigger('appear', [
            state('in', style({ transform: 'translateY(0)'})),
            transition('void => *', [
                style({ transform: 'rotate(300deg)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateY(100%)' }))
            ])
        ])
    ]
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