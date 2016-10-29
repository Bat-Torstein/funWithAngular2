import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ConfirmDialogModule } from 'primeng/primeng';
import { AttributeDialogComponent } from './attributedialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './attribute.component';
import { TextAreaComponent } from './textarea.component';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent
    ],
    exports: [
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent,
        GrowlModule,
        ConfirmDialogModule
    ],
    imports: [
        ModalModule,
        FormsModule,
        CommonModule,
        GrowlModule,
        ConfirmDialogModule
    ]
})
export class DialogModule { }
