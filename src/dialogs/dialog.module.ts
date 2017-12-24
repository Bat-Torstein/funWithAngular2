import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AttributeComponent } from './attribute.component';
import { AttributeDialogComponent } from './attributedialog.component';
import { TextAreaComponent } from './textarea.component';

import { ConfirmDialogModule,
         DialogModule as PrimeDialog,
         GrowlModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent,
    ],
    exports: [
        AttributeDialogComponent,
        AttributeComponent,
        TextAreaComponent,
        GrowlModule,
        ConfirmDialogModule,
        PrimeDialog,

    ],
    imports: [
        FormsModule,
        CommonModule,
        GrowlModule,
        ConfirmDialogModule,
        PrimeDialog,
    ],
})
export class DialogModule { }
