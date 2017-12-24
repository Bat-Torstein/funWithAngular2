"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const item_1 = require("../models/item");
const listitem_component_1 = require("./listitem.component");
const treeselector_1 = require("./treeselector");
describe("ListItemComponent", () => {
    const itemWithChildren = new item_1.Item(1, "withChildren");
    itemWithChildren.children = [];
    itemWithChildren.children.push(new item_1.Item(11, "child"));
    const itemWithNoChildren = new item_1.Item(2, "nochildren");
    describe("ListItemComponent", () => {
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                declarations: [listitem_component_1.ListItemComponent],
                providers: [treeselector_1.TreeSelector],
            }).compileComponents();
        }));
        it("can open when closed and item has children", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;
            expect(comp.canOpen()).toBeTruthy();
        });
        it("can not open when already open", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new item_1.Item(1, "name");
            comp.open = true;
            expect(comp.canOpen()).toBeFalsy();
        });
        it("can not open when item has no children", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = false;
            expect(comp.canOpen()).toBeFalsy();
        });
        it("can close when open and item has children", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = true;
            expect(comp.canClose()).toBeTruthy();
        });
        it("can not close when already closed", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;
            expect(comp.canClose()).toBeFalsy();
        });
        it("can not close when item has no children", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = true;
            expect(comp.canClose()).toBeFalsy();
        });
        it("is selected when treeSelector contains item in selected list", testing_1.inject([treeselector_1.TreeSelector], (treeSelector) => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new item_1.Item(1, "name");
            treeSelector.singleSelect(comp.item);
            fixture.detectChanges();
            expect(comp.isSelected()).toBeTruthy();
        }));
        it("is not selected when treeSelector contains other items", () => {
            const fixture = testing_1.TestBed.createComponent(listitem_component_1.ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new item_1.Item(1, "name");
            fixture.detectChanges();
            expect(comp.isSelected()).toBeFalsy();
        });
    });
});
//# sourceMappingURL=listitem.component.spec.js.map