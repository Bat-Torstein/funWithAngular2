import { TestBed, inject, async } from '@angular/core/testing';
import { ConfirmDialogComponent } from 'app/dialogs/confirmdialog.component';
import { Modal, ModalModule } from 'ng2-modal';

describe('ConfirmDialog', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmDialogComponent],
            imports: [ModalModule]
        }).compileComponents();
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

    it('should emit onOk when modal confirms', () => {
        let fixture = TestBed.createComponent(ConfirmDialogComponent);
        let comp = fixture.componentInstance;
        spyOn(comp.onOk, "emit");

        comp.confirm();

        expect(comp.onOk.emit).toHaveBeenCalled();
    });

    it('should close the dialog when modal confirms', () => {
        let fixture = TestBed.createComponent(ConfirmDialogComponent);
        let comp = fixture.componentInstance;
        spyOn(comp.modal, "close");

        comp.confirm();

        expect(comp.modal.close).toHaveBeenCalled();
    });
}); 
