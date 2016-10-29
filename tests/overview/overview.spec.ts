import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { OverviewComponent } from 'app/overview/overview.component';

describe('OverViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewComponent],
            schemas: [NO_ERRORS_SCHEMA],

        }).compileComponents();
    }));

    it('has itemlist', () => {
        let fixture = TestBed.createComponent(OverviewComponent);
        expect(fixture.debugElement.nativeElement.innerHTML).toContain("item-list");
    });
}); 
