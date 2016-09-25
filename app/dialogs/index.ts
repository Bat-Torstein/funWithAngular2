import {NgModule}      from '@angular/core';
import {ModalModule} from 'ng2-modal';
import {ConfirmDialogComponent} from './confirmdialog.component';

@NgModule({
    declarations: [ConfirmDialogComponent],
    exports: [ConfirmDialogComponent],
    imports: [ModalModule]
})
export class DialogModule { }