"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const primeng_1 = require("primeng/primeng");
const pipes_module_1 = require("../pipes/pipes.module");
const list_component_1 = require("./list.component");
const listitem_component_1 = require("./listitem.component");
const treeselector_1 = require("./treeselector");
let ListModule = class ListModule {
};
ListModule = __decorate([
    core_1.NgModule({
        declarations: [listitem_component_1.ListItemComponent, list_component_1.ListComponent],
        exports: [list_component_1.ListComponent, listitem_component_1.ListItemComponent],
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, primeng_1.GrowlModule, pipes_module_1.PipesModule],
        providers: [treeselector_1.TreeSelector],
    })
], ListModule);
exports.ListModule = ListModule;
//# sourceMappingURL=list.module.js.map