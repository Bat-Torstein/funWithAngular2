import { Component } from "@angular/core";
import { OverviewComponent } from "../overview/overview.component";
import { ItemService } from "../services/item.service";

@Component({
    selector: "test-app",
    template: `
<div class="col-xs-12">
    <toolbar></toolbar>
</div>
<div class="col-xs-12">
    <router-outlet></router-outlet>
</div>
`,
    providers: [ItemService],
})

export class AppComponent { }
