import { Component, Input, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';
import { AttributeModel } from './attributemodel';
import template from './textarea.component.html!text';

@Component({
    selector: 'textarea-dialog',
    template: template
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