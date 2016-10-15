import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { StubsModule } from '../stubs/stubs.module';
import { OverviewComponent } from '../../app/overview/overview.component';
import { ToastsManager } from 'ng2-toastr';

describe('OverViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewComponent],
            providers: [ToastsManager],
            imports: [StubsModule]
        }).compileComponents();
    }));

    it('has itemlist', () => {
        let fixture = TestBed.createComponent(OverviewComponent);
        expect(fixture.debugElement.nativeElement.innerHTML).toContain("item-list");
    });
}); 
