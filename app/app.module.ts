import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesModule } from './pipes/index';
//import { DialogModule } from './dialogs/index';
import { ListModule } from './list/index';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { ItemService } from './services/item.service';

import { AppComponent }  from './app.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports:      [BrowserModule, PipesModule, ListModule, ToastModule ],
  declarations: [AppComponent, OverviewComponent],
  providers:    [ItemService],
  bootstrap:    [AppComponent]
})
export class AppModule { }
