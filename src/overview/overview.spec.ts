import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { OverviewComponent } from "./overview.component";

describe("OverViewComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewComponent],
            schemas: [NO_ERRORS_SCHEMA],

        }).compileComponents();
    }));

    it("has itemlist", () => {
        const fixture = TestBed.createComponent(OverviewComponent);
        expect(fixture.debugElement.nativeElement.innerHTML).toContain("item-list");
    });
});
