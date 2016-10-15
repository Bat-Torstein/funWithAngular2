import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdSpinner } from '@angular2-material/progress-circle';

import { PipesModule } from './pipes/index';
import { DialogModule } from './dialogs/index';
import { ListModule } from './list/index';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { ItemService } from './services/item.service';

import { AppComponent }  from './app.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports:      [BrowserModule, PipesModule, DialogModule, ListModule, ToastModule],
  declarations: [AppComponent, OverviewComponent, MdSpinner],
  providers:    [ItemService],
  bootstrap:    [AppComponent]
})
export class AppModule { }
