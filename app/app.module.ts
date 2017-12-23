import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { MenuModule } from "primeng/primeng";

import { DialogModule } from "./dialogs/dialog.module";
import { ListModule } from "./list/list.module";
import { PipesModule } from "./pipes/pipes.module";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { OverviewComponent } from "./overview/overview.component";
import { PageNotFoundComponent } from "./pagenotfound.component";
import { ItemService } from "./services/item.service";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
    imports: [
        BrowserModule,
        PipesModule,
        DialogModule,
        ListModule,
        MenuModule,
        RouterModule.forRoot([
            { path: "overview", component: OverviewComponent },
            { path: "demo", component: DemoComponent },
            { path: "", component: OverviewComponent },
            { path: "**", component: PageNotFoundComponent },
        ]),
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        OverviewComponent,
        DemoComponent,
        PageNotFoundComponent,
    ],

    providers: [
        ItemService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],

    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
