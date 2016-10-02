import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ConfirmDialogComponent } from './confirmdialog.component';
import { AttributeDialogComponent } from './attributedialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './attribute.component';
import { TextAreaComponent } from './textarea.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent
    ],
    exports: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent
    ],
    imports: [
        ModalModule,
        FormsModule,
        CommonModule
    ]
})
export class DialogModule { }
