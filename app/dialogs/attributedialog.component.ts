import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {Modal} from 'ng2-modal';

@Component({
    moduleId: module.id,
    selector: 'attribute-dialog',
    templateUrl: 'attributedialog.component.html'
})
export class AttributeDialogComponent {
    @ViewChild(Modal) modal: Modal;
    errors: boolean;

    constructor(private toastsManager: ToastsManager) {
    }

    open() {
        this.modal.open();
    }

    cancel() {
        this.modal.close();
    }

    save() {
       this.toastsManager.success("Jau!");
       this.modal.close();
    }
} 