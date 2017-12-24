"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TreeSelector = class TreeSelector {
    constructor() {
        this.selectedItems = {};
    }
    singleSelect(item) {
        this.selectedItems = {};
        this.selectedItems[item.id] = item;
    }
    multiSelect(item) {
        if (this.isSelected(item.id)) {
            delete this.selectedItems[item.id];
        }
        else {
            this.selectedItems[item.id] = item;
        }
    }
    isSelected(id) {
        return this.selectedItems[id] ? true : false;
    }
};
TreeSelector = __decorate([
    core_1.Injectable()
], TreeSelector);
exports.TreeSelector = TreeSelector;
//# sourceMappingURL=treeselector.js.map