import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AttributeDialogComponent } from './attributedialog.component';
import { AttributeComponent } from './attribute.component';
import { TextAreaComponent } from './textarea.component';

import { ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { DialogModule as PrimeDialog } from 'primeng/primeng';

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
        ConfirmDialogModule,
        PrimeDialog

    ],
    imports: [
        FormsModule,
        CommonModule,
        GrowlModule,
        ConfirmDialogModule,
        PrimeDialog
    ]
})
export class DialogModule { }
