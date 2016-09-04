import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list/listitem.component';
import {MapToIterablePipe} from './common/maptoiterable';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, OverviewComponent, ListItemComponent, ListComponent, MapToIterablePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
