"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const Rx_1 = require("rxjs/Rx");
const pipes_module_1 = require("../pipes/pipes.module");
const item_service_1 = require("../services/item.service");
const item_1 = require("../models/item");
const list_component_1 = require("./list.component");
const listitem_component_1 = require("./listitem.component");
class MockItemService extends item_service_1.ItemService {
    getItems() {
        return Rx_1.Observable.from([]);
    }
}
describe("ListComponent", () => {
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_component_1.ListComponent, listitem_component_1.ListItemComponent],
            providers: [
                { provide: item_service_1.ItemService, useClass: MockItemService },
            ],
            imports: [forms_1.FormsModule, pipes_module_1.PipesModule],
        }).compileComponents();
    }));
    it("should display a list of items", () => {
        testing_1.TestBed.compileComponents().then(() => {
            const fixture = testing_1.TestBed.createComponent(list_component_1.ListComponent);
            fixture.componentInstance.items = [new item_1.Item(1, "first"), new item_1.Item(2, "second")];
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelectorAll("li").length).toBe(2);
        });
    });
});
//# sourceMappingURL=list.component.spec.js.map