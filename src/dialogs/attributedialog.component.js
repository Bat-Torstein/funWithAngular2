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
const forms_1 = require("@angular/forms");
const attributemodel_1 = require("./attributemodel");
let AttributeDialogComponent = class AttributeDialogComponent {
    constructor() {
        this.display = false;
        this.attributes = [];
        const numeric = new attributemodel_1.AttributeModel("numeric", "Numeric Attribute", "");
        numeric.validPattern = "^[0-9]+$";
        this.attributes.push(numeric);
        const onlyTextAndNumbers = new attributemodel_1.AttributeModel("onlyTextAndNumbers", "Only text and numbers", "");
        onlyTextAndNumbers.validPattern = "^[a-zA-Z0-9]*$";
        this.attributes.push(onlyTextAndNumbers);
        const mustHaveValue = new attributemodel_1.AttributeModel("mustHaveValue", "Must have value", "");
        mustHaveValue.isRequired = true;
        this.attributes.push(mustHaveValue);
    }
    open() {
        this.display = true;
    }
    cancel() {
        this.display = false;
    }
    save() {
        this.cancel();
    }
    isValid() {
        if (this.form) {
            return this.form.valid ? "Valid" : "Not Valid!";
        }
        return "";
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AttributeDialogComponent.prototype, "display", void 0);
__decorate([
    core_1.ViewChild(forms_1.NgForm),
    __metadata("design:type", forms_1.NgForm)
], AttributeDialogComponent.prototype, "form", void 0);
AttributeDialogComponent = __decorate([
    core_1.Component({
        selector: "attribute-dialog",
        template: `
<p-dialog [(visible)]="display" header="Attributes" modal="modal" width="800" showEffect="fade">
    <form #form="ngForm">
    <table class="table">
        <thead><tr><th>Attribute name</th><th>Attribute value</th></tr></thead>
        <tbody>
            <tr attribute-row *ngFor="let attribute of attributes" [name]="attribute.name" [ngModel]="attribute"></tr>
        </tbody>
    </table>
    </form>
    <footer>
        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button class="btn btn-default" (click)="cancel()">Cancel</button>
            <button class="btn btn-primary" (click)="save()" type="submit" [disabled]="!form.valid">Ok</button>
        </div>
    </footer>
</p-dialog>
`,
    }),
    __metadata("design:paramtypes", [])
], AttributeDialogComponent);
exports.AttributeDialogComponent = AttributeDialogComponent;
//# sourceMappingURL=attributedialog.component.js.map