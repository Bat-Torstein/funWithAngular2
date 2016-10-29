import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';

@Component({
    selector: 'confirm-dialog',
    template: `
<modal title="{{title}}"
       modalClass="modal-sm" 
       [hideCloseButton]="false" 
       [closeOnEscape]="false"
       [closeOnOutsideClick]="false">
    <modal-content>
        <div>
        {{text}}
        </div>
    </modal-content>
    <modal-footer>
        <button class="btn btn-default" (click)="cancel()">Cancel</button>
        <button class="btn btn-primary" (click)="confirm()">Ok</button>
    </modal-footer>
</modal>
`
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