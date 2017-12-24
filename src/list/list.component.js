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
const _ = require("underscore");
const treeselector_1 = require("../list/treeselector");
const item_service_1 = require("../services/item.service");
let ListComponent = class ListComponent {
    constructor(itemService, treeSelector) {
        this.itemService = itemService;
        this.treeSelector = treeSelector;
    }
    getItems() {
        this.itemService.getItems().subscribe((item) => this.items = [item], (error) => console.error(error));
    }
    ngOnInit() {
        this.getItems();
        const test = _.random(0, 100);
    }
    upperText() {
        this.textValue = this.textValue.toUpperCase();
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: "item-list",
        providers: [treeselector_1.TreeSelector],
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
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService, treeselector_1.TreeSelector])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map