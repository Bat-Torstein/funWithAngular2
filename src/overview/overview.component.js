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
const primeng_1 = require("primeng/primeng");
const attributedialog_component_1 = require("../dialogs/attributedialog.component");
let OverviewComponent = class OverviewComponent {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.messages = [];
    }
    userConfirms() {
        this.messages.push({ severity: "success", summary: "yay" });
    }
    openAttributes() {
        this.attributeForm.open();
    }
    openConfirm() {
        this.confirmationService.confirm({
            message: "Confirm this?",
            accept: () => this.userConfirms(),
        });
    }
};
__decorate([
    core_1.ViewChild(attributedialog_component_1.AttributeDialogComponent),
    __metadata("design:type", attributedialog_component_1.AttributeDialogComponent)
], OverviewComponent.prototype, "attributeForm", void 0);
OverviewComponent = __decorate([
    core_1.Component({
        selector: "app-overview",
        providers: [primeng_1.ConfirmationService],
        template: `
<div class="col-md-3" >
    <item-list>
    </item-list>
</div>
<button class="btn btn-primary" (click)="openConfirm()">TestConfirm</button>
<button class="btn btn-primary" (click)="openAttributes()">TestAttributes</button>
<p-confirmDialog header="Confirmation" icon="fa fa-question-circle" width="425"></p-confirmDialog>
<attribute-dialog>
</attribute-dialog>

<span>The attributes form is {{attributeForm.isValid()}}</span>
<p-growl [value]="messages"></p-growl>
`,
    }),
    __metadata("design:paramtypes", [primeng_1.ConfirmationService])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map