import {TestBed, inject, async} from '@angular/core/testing';
import {ConfirmDialogComponent} from '../../app/dialogs/confirmdialog.component';
import {Modal, ModalModule} from 'ng2-modal';

describe('ConfirmDialog', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmDialogComponent],
            imports: [ModalModule]
        });
    });

    describe('ConfirmDialog', () => {
        beforeEach(async(() => {
            TestBed.compileComponents();
        }));

        it('should be a modal dialog', () => {
            let fixture = TestBed.createComponent(ConfirmDialogComponent);
            let modalClasses = fixture.debugElement.nativeElement.querySelectorAll(".modal");
            
            expect(modalClasses.length).toBeGreaterThan(0);
        });

        it('should open modal on open', () => {
            let fixture = TestBed.createComponent(ConfirmDialogComponent);
            let comp = fixture.componentInstance;
            spyOn(comp.modal, "open");

            comp.open();

            expect(comp.modal.open).toHaveBeenCalled();
        });

        it('should close modal on close', () => {
            let fixture = TestBed.createComponent(ConfirmDialogComponent);
            let comp = fixture.componentInstance;
            spyOn(comp.modal, "close");

            comp.close();

            expect(comp.modal.close).toHaveBeenCalled();
        });

        it('should emit onOk when modal emits submit', () => {
            let fixture = TestBed.createComponent(ConfirmDialogComponent);
            let comp = fixture.componentInstance;
            spyOn(comp.onOk, "emit");

            comp.modal.onSubmit.emit(null);

            expect(comp.onOk.emit).toHaveBeenCalled();
        });

        it('should close the dialog when modal submits', () => {
            let fixture = TestBed.createComponent(ConfirmDialogComponent);
            let comp = fixture.componentInstance;
            spyOn(comp.modal, "close");

            comp.modal.onSubmit.emit(null);

            expect(comp.modal.close).toHaveBeenCalled();
        });
    });
}); 
