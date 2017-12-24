import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/primeng";

@Component({
    selector: "toolbar",
    templateUrl: "./toolbar.component.html",
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
