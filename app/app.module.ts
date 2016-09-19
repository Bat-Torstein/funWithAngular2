import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalModule} from 'ng2-modal';

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list/listitem.component';
import {MapToIterablePipe} from './common/maptoiterable';

import {ConfirmDialogComponent} from './dialogs/confirmdialog.component';

@NgModule({
  imports:      [BrowserModule, FormsModule, ModalModule],
  declarations: [AppComponent, OverviewComponent, ListItemComponent, ListComponent, MapToIterablePipe, ConfirmDialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
