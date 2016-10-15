import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { OverviewComponent } from '../../app/overview/overview.component';
import { ToastsManager } from 'ng2-toastr';

@Component({ selector: 'item-list', template: '' })
class ItemListStub { }

@Component({ selector: 'md-spinner', template: '' })
class SpinnerStub { }

@Component({ selector: 'confirm-dialog', template: '' })
class ConfirmDialogStub { }

@Component({ selector: 'attribute-dialog', template: '' })
class AttributeDialogStub { }

describe('OverViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewComponent, ConfirmDialogStub,
                            ItemListStub, AttributeDialogStub, SpinnerStub],
            providers: [ToastsManager]
        }).compileComponents();
    }));

    it('has itemlist', () => {
        let fixture = TestBed.createComponent(OverviewComponent);
        expect(fixture.debugElement.nativeElement.innerHTML).toContain("item-list");
    });
}); 
