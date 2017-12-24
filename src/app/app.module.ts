import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { MenuModule } from "primeng/primeng";

import { DialogModule } from "../dialogs/dialog.module";
import { ListModule } from "../list/list.module";
import { PipesModule } from "../pipes/pipes.module";

import { AppComponent } from "./app.component";
import { DemoComponent } from "../demo/demo.component";
import { OverviewComponent } from "../overview/overview.component";
import { ItemService } from "../services/item.service";
import { ToolbarComponent } from "../toolbar/toolbar.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PipesModule,
        DialogModule,
        ListModule,
        MenuModule,
        RouterModule.forRoot([
            { path: "overview", component: OverviewComponent },
            { path: "demo", component: DemoComponent },
            { path: "", component: OverviewComponent },
        ]),
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        OverviewComponent,
        DemoComponent,
    ],

    providers: [
        ItemService,
    ],

    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }