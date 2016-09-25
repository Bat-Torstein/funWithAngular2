import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PipesModule} from './pipes/index';
import {DialogModule} from './dialogs/index';
import {ListModule} from './list/index';

import {ItemService} from './services/item.service';

import {AppComponent}  from './app.component';
import {OverviewComponent} from './overview/overview.component';

@NgModule({
  imports:      [BrowserModule, PipesModule, DialogModule, ListModule],
  declarations: [AppComponent, OverviewComponent],
  providers:    [ItemService],
  bootstrap:    [AppComponent]
})
export class AppModule { }
