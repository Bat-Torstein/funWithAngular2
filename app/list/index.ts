import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/index';
import { GrowlModule } from 'primeng/primeng';

import { TreeSelector } from './treeselector';
import { ListComponent } from './list.component';
import { ListItemComponent } from './listitem.component';

@NgModule({
    declarations: [ListItemComponent, ListComponent],
    exports: [ListComponent, ListItemComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, GrowlModule, PipesModule],
    providers: [TreeSelector]
})
export class ListModule { }