import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/primeng";

@Component({
    selector: "toolbar",
    template: `
<button class="btn btn-default" (click)="navigateOverview()"><i class="fa fa-object-ungroup fa-4x fa-fw"></i></button>
<button class="btn btn-default" (click)="navigateDemo()"><i class="fa fa-server fa-4x fa-fw"></i></button>
<button #profile class="btn btn-default pull-right" (click)="menu.toggle($event)"><i class="fa fa-user-o fa-4x fa-fw"></i></button>
<p-growl [value]="messages"></p-growl>
<p-menu #menu popup="popup" [model]="menuItems"></p-menu>
`,
})
export class ToolbarComponent implements OnInit {
    private messages = [];
    private menuItems: MenuItem[];

    constructor(private router: Router) {}

    public navigateOverview() {
        this.router.navigate(["overview"]);
    }

    public navigateDemo() {
        this.router.navigate(["demo"]);
    }

    public login() {
        this.messages.push({ severity: "success", summary: "Logged in" });
    }

    public logout() {
        this.messages.push({ severity: "info", summary: "Logged out" });
    }

    public ngOnInit() {
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
}
