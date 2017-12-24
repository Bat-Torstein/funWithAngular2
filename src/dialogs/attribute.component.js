"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const attributemodel_1 = require("./attributemodel");
let AttributeComponent = AttributeComponent_1 = class AttributeComponent {
    constructor() {
        this.attribute = new attributemodel_1.AttributeModel("", "", "");
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
    }
    writeValue(value) {
        if (value) {
            this.attribute = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    validate(c) {
        if (this.attribute.isValid()) {
            return null;
        }
        return "Invalid ";
    }
    get attributeLabel() {
        return this.attribute.label;
    }
    set attributeLabel(val) {
        this.attribute.label = val;
        this.onChange(this.attribute);
    }
    get attributeValue() {
        return this.attribute.value;
    }
    set attributeValue(val) {
        this.attribute.value = val;
        this.onChange(this.attribute);
    }
};
AttributeComponent = AttributeComponent_1 = __decorate([
    core_1.Component({
        selector: "[attribute-row]",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => AttributeComponent_1),
                multi: true,
            },
            {
                provide: forms_1.NG_VALIDATORS,
                useExisting: core_1.forwardRef(() => AttributeComponent_1),
                multi: true,
            },
        ],
        template: `
<td>
    <input [(ngModel)]="attributeLabel" class="form-control" #name="ngModel"/>
    <div *ngIf="!name.pristine && !attribute.isLabelValid()" class="alert alert-danger">name is required</div>
</td>
<td>
    <div class="has-feedback">
        <input [(ngModel)]="attributeValue" class="form-control" #attr="ngModel" />
        <span class="glyphicon glyphicon-fullscreen form-control-expand form-control-feedback" (click)="textarea.open()"></span>
    </div>
    <div *ngIf="!attr.pristine && !attribute.isValueValid()" class="alert alert-danger">{{attributeLabel}} is incorrect</div>
</td>
<textarea-dialog
        #textarea
        [attribute]="attribute">
</textarea-dialog>
`,
    })
], AttributeComponent);
exports.AttributeComponent = AttributeComponent;
var AttributeComponent_1;
//# sourceMappingURL=attribute.component.js.map