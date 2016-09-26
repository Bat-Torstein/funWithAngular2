import { NgModule }      from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ConfirmDialogComponent } from './confirmdialog.component';
import { AttributeDialogComponent } from './attributedialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ConfirmDialogComponent, AttributeDialogComponent],
    exports: [ConfirmDialogComponent, AttributeDialogComponent],
    imports: [ModalModule, FormsModule]
})
export class DialogModule { }