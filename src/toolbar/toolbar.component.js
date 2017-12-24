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
const router_1 = require("@angular/router");
let ToolbarComponent = class ToolbarComponent {
    constructor(router) {
        this.router = router;
        this.messages = [];
    }
    navigateOverview() {
        this.router.navigate(["overview"]);
    }
    navigateDemo() {
        this.router.navigate(["demo"]);
    }
    login() {
        this.messages.push({ severity: "success", summary: "Logged in" });
    }
    logout() {
        this.messages.push({ severity: "info", summary: "Logged out" });
    }
    ngOnInit() {
        this.menuItems = [
            {
                label: "Log in",
                icon: "fa-user-circle-o",
                command: (event) => this.login(),
            },
            {
                label: "Log out",
                icon: "fa-user-circle",
                command: (event) => this.logout(),
            },
        ];
    }
};
ToolbarComponent = __decorate([
    core_1.Component({
        selector: "toolbar",
        template: `
<button class="btn btn-default" (click)="navigateOverview()"><i class="fa fa-object-ungroup fa-4x fa-fw"></i></button>
<button class="btn btn-default" (click)="navigateDemo()"><i class="fa fa-server fa-4x fa-fw"></i></button>
<button #profile class="btn btn-default pull-right" (click)="menu.toggle($event)"><i class="fa fa-user-o fa-4x fa-fw"></i></button>
<p-growl [value]="messages"></p-growl>
<p-menu #menu popup="popup" [model]="menuItems"></p-menu>
`,
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map