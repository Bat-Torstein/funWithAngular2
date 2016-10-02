import { Component, Input, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: 'textarea-dialog',
    templateUrl: 'textarea.component.html'
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