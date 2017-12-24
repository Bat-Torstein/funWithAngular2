"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const item_1 = require("../models/item");
const treeselector_1 = require("./treeselector");
let ListItemComponent = class ListItemComponent {
    constructor(treeSelector) {
        this.treeSelector = treeSelector;
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
    onClick(event) {
        if (this.item.children && this.item.children.length) {
            this.open = !this.open;
        }
        if (event.ctrlKey) {
            this.treeSelector.multiSelect(this.item);
        }
        else {
            this.treeSelector.singleSelect(this.item);
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", item_1.Item)
], ListItemComponent.prototype, "item", void 0);
ListItemComponent = __decorate([
    core_1.Component({
        selector: "list-item",
        animations: [
            core_1.trigger("appear", [
                core_1.state("in", core_1.style({ transform: "translateY(0)" })),
                core_1.transition("void => *", [
                    core_1.style({ transform: "rotate(300deg)" }),
                    core_1.animate(100),
                ]),
                core_1.transition("* => void", [
                    core_1.animate(100, core_1.style({ transform: "translateY(100%)" })),
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
    }),
    __metadata("design:paramtypes", [treeselector_1.TreeSelector])
], ListItemComponent);
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=listitem.component.js.map