import {
    animate,
    Component,
    EventEmitter,
    Input,
    Output,
    state,
    style,
    transition,
    trigger } from "@angular/core";
import { Item } from "../models/item";
import { TreeSelector } from "./treeselector";

@Component({
    selector: "list-item",
    animations: [
        trigger("appear", [
            state("in", style({ transform: "translateY(0)"})),
            transition("void => *", [
                style({ transform: "rotate(300deg)" }),
                animate(100),
            ]),
            transition("* => void", [
                animate(100, style({ transform: "translateY(100%)" })),
            ]),
        ]),
    ],
    template: `
<span class='glyphicon'
    [class.glyphicon-plus]='canOpen()'
    [class.glyphicon-minus]="canClose()"
    [class.selected]="isSelected()"
    (click)="onClick($event)">
        {{item.name }}
</span>
<div *ngIf = "open">
    <ul>
        <li *ngFor = "let child of item.children" [@appear]="'in'">
            <list-item [item]="child"></list-item>
        </li>
    </ul>
</div>

`,
})
export class ListItemComponent {
    @Input() private item: Item;
    private open: boolean;

    constructor(private treeSelector: TreeSelector) {
        this.open = false;
    }

    public canOpen() {
        return this.item.children && this.item.children.length && !this.open;
    }

    public canClose() {
        return this.item.children && this.item.children.length && this.open;
    }

    public isSelected() {
        return this.treeSelector.isSelected(this.item.id);
    }

    public onClick(event: MouseEvent) {
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