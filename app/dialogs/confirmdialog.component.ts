import {Component, ViewChild, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Modal} from 'ng2-modal';

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: 'confirmdialog.component.html'
})
export class ConfirmDialogComponent{
    @ViewChild(Modal) modal: Modal;
    title: string;
    text: string;
    response: Subject<boolean> = new Subject<boolean>();

    confirm(title: string, text: string) : Subject<boolean> {
        this.title = title;
        this.text = text;
        this.modal.open();

        return this.response;
    }

    onSubmit() {
        this.response.next(true);
        this.modal.close();
    }

    onCancel() {
        this.response.next(false);
        this.modal.close();
    }
} 