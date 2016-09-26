import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: 'confirmdialog.component.html'
})
export class ConfirmDialogComponent {
    @Input() title: string;
    @Input() text: string;
    @ViewChild(Modal) modal: Modal;
    @Output() onOk: EventEmitter<any> = new EventEmitter();

    open() {
        this.modal.open();        
    }

    confirm() {
        this.onOk.emit(null);
        this.modal.close();    
    }

    cancel() {
        this.modal.close();
    }
} 