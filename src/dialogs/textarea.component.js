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
const attributemodel_1 = require("./attributemodel");
let TextAreaComponent = class TextAreaComponent {
    constructor() {
        this.display = false;
    }
    open() {
        this.display = true;
    }
    close() {
        this.display = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", attributemodel_1.AttributeModel)
], TextAreaComponent.prototype, "attribute", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TextAreaComponent.prototype, "display", void 0);
TextAreaComponent = __decorate([
    core_1.Component({
        selector: "textarea-dialog",
        template: `
<p-dialog [(visible)]="display" [header]="attribute.label" width="800">
    <header>
        {{attribute.label}}
    </header>
    <textarea class="col-md-12" rows="10" [(ngModel)]="attribute.value"></textarea>
    <footer>
        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button class="btn btn-default" (click)="close()">Ok</button>
        </div>
    </footer>
</p-dialog>
`,
    })
], TextAreaComponent);
exports.TextAreaComponent = TextAreaComponent;
//# sourceMappingURL=textarea.component.js.map