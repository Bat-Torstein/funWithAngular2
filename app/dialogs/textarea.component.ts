import { Component, Input, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';
import { AttributeModel } from './attributemodel';

@Component({
    selector: 'textarea-dialog',
    template: `
<modal [title]="attribute.label"
       modalClass=""
       [hideCloseButton]="false"
       [closeOnEscape]="true"
       [closeOnOutsideClick]="true">
    <modal-content>

        <textarea class="col-md-12" rows="10" style="height:auto" [(ngModel)]="attribute.value"></textarea>
    </modal-content>
    <modal-footer>
        <button class="btn btn-default" (click)="close()">Ok</button>
    </modal-footer>
</modal>
`
})
export class TextAreaComponent {
    @Input() attribute: AttributeModel;
    @ViewChild(Modal) modal: Modal;

    open() {
        this.modal.open();
    }

    close() {
        this.modal.close();
    }
} 