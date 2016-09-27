import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ConfirmDialogComponent } from './confirmdialog.component';
import { AttributeDialogComponent } from './attributedialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttributeTableComponent } from './attributetable.component';
import { AttributeComponent } from './attribute.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeTableComponent,
        AttributeComponent
    ],
    exports: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeTableComponent,
        AttributeComponent
    ],
    imports: [
        ModalModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class DialogModule { }
