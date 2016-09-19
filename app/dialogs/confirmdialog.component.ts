import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Modal} from 'ng2-modal';

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: 'confirmdialog.component.html'
})
export class ConfirmDialogComponent {
    @Input() title;
    @Input() text;
    @ViewChild(Modal) modal: Modal;
    @Output() onOk: EventEmitter<any> = new EventEmitter();

    open() {
        this.modal.open();        
    }

    close() {
        this.modal.close();
    }

    onSubmit() {
        this.onOk.emit(null);
        this.close();    
    }
} 