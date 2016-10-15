import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/index';
import * as _ from 'underscore'; 
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { TreeSelector } from './treeselector';
import { ListComponent } from './list.component';
import { ListItemComponent } from './listitem.component';

@NgModule({
    declarations: [ListItemComponent, ListComponent],
    exports: [ListComponent, ListItemComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, PipesModule, ToastModule],
    providers: [TreeSelector]
})
export class ListModule { }