import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ConfirmDialogComponent } from './confirmdialog.component';
import { AttributeDialogComponent } from './attributedialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './attribute.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeComponent
    ],
    exports: [
        ConfirmDialogComponent,
        AttributeDialogComponent,
        AttributeComponent
    ],
    imports: [
        ModalModule,
        FormsModule,
        CommonModule
    ]
})
export class DialogModule { }
