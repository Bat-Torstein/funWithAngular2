import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/primeng';
import { PipesModule } from '../pipes/pipes.module';

import { ListComponent } from './list.component';
import { ListItemComponent } from './listitem.component';

import { TreeSelector } from './treeselector';

@NgModule({
    declarations: [ListItemComponent, ListComponent],
    exports: [ListComponent, ListItemComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, GrowlModule, PipesModule],
    providers: [TreeSelector],
})
export class ListModule { }
