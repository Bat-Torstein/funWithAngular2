import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/index';
import { ToastModule } from 'ng2-toastr';

import { TreeSelector } from './treeselector';
import { ListComponent } from './list.component';
import { ListItemComponent } from './listitem.component';

@NgModule({
    declarations: [ListItemComponent, ListComponent],
    exports: [ListComponent, ListItemComponent],
    imports: [FormsModule, CommonModule, PipesModule, ToastModule],
    providers: [TreeSelector]
})
export class ListModule { }