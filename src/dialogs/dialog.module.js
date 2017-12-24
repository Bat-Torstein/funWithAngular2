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
const attribute_component_1 = require("./attribute.component");
const attributedialog_component_1 = require("./attributedialog.component");
const textarea_component_1 = require("./textarea.component");
const primeng_1 = require("primeng/primeng");
let DialogModule = class DialogModule {
};
DialogModule = __decorate([
    core_1.NgModule({
        declarations: [
            attributedialog_component_1.AttributeDialogComponent,
            attribute_component_1.AttributeComponent,
            textarea_component_1.TextAreaComponent,
        ],
        exports: [
            attributedialog_component_1.AttributeDialogComponent,
            attribute_component_1.AttributeComponent,
            textarea_component_1.TextAreaComponent,
            primeng_1.GrowlModule,
            primeng_1.ConfirmDialogModule,
            primeng_1.DialogModule,
        ],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            primeng_1.GrowlModule,
            primeng_1.ConfirmDialogModule,
            primeng_1.DialogModule,
        ],
    })
], DialogModule);
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.module.js.map