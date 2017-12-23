import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { Item } from "../models/item";
import { ListItemComponent } from "./listitem.component";
import { TreeSelector } from "./treeselector";

describe("ListItemComponent", () => {
    const itemWithChildren = new Item(1, "withChildren");
    itemWithChildren.children = [];
    itemWithChildren.children.push(new Item(11, "child"));
    const itemWithNoChildren = new Item(2, "nochildren");

    describe("ListItemComponent", () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ListItemComponent],
                providers: [TreeSelector],
            }).compileComponents();
        }));

        it("can open when closed and item has children", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;

            expect(comp.canOpen()).toBeTruthy();
        });

        it("can not open when already open", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            comp.open = true;

            expect(comp.canOpen()).toBeFalsy();
         });

        it("can not open when item has no children", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = false;

            expect(comp.canOpen()).toBeFalsy();
        });

        it("can close when open and item has children", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = true;

            expect(comp.canClose()).toBeTruthy();
         });

        it("can not close when already closed", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;

            expect(comp.canClose()).toBeFalsy();
         });

        it("can not close when item has no children", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = true;

            expect(comp.canClose()).toBeFalsy();
         });

        it("is selected when treeSelector contains item in selected list", inject([TreeSelector], (treeSelector: TreeSelector) => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            treeSelector.singleSelect(comp.item);
            fixture.detectChanges();

            expect(comp.isSelected()).toBeTruthy();
         }));

        it("is not selected when treeSelector contains other items", () => {
            const fixture = TestBed.createComponent(ListItemComponent);
            const comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            fixture.detectChanges();

            expect(comp.isSelected()).toBeFalsy();
         });
    });
});
