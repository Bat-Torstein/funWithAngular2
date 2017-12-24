"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const overview_component_1 = require("./overview.component");
describe("OverViewComponent", () => {
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [overview_component_1.OverviewComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));
    it("has itemlist", () => {
        const fixture = testing_1.TestBed.createComponent(overview_component_1.OverviewComponent);
        expect(fixture.debugElement.nativeElement.innerHTML).toContain("item-list");
    });
});
//# sourceMappingURL=overview.spec.js.map