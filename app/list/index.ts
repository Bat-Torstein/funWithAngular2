import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ListComponent} from './list.component';
import {ListItemComponent} from './listitem.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../pipes/index';
import {TreeSelector} from './treeselector';

@NgModule({
    declarations: [ListItemComponent, ListComponent],
    exports: [ListComponent, ListItemComponent],
    imports: [FormsModule, CommonModule, PipesModule],
    providers: [TreeSelector]
})
export class ListModule { }