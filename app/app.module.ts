import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PipesModule } from './pipes/index';
import { DialogModule } from './dialogs/index';
import { ListModule } from './list/index';
import { MenuModule } from 'primeng/primeng';

import { ItemService } from './services/item.service';

import { OverviewComponent } from './overview/overview.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { ToolbarComponent } from './toolbar/toolbar.component'
import { AppComponent }  from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        PipesModule,
        DialogModule,
        ListModule,
        MenuModule,
        RouterModule.forRoot([
            { path: 'overview', component: OverviewComponent },
            { path: 'demo', component: DemoComponent },
            { path: '', component: OverviewComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        OverviewComponent,
        DemoComponent,
        PageNotFoundComponent
    ],

    providers: [
        ItemService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
