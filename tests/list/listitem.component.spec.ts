import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListItemComponent } from '../../app/list/listitem.component';
import { TreeSelector } from '../../app/list/treeselector';
import { Item } from '../../app/models/item';

describe('ListItemComponent', () => {
    let itemWithChildren = new Item(1, "withChildren");
    itemWithChildren.children = [];
    itemWithChildren.children.push(new Item(11, "child"));
    let itemWithNoChildren = new Item(2, "nochildren");

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListItemComponent],
            providers: [TreeSelector]
        });
    });

    beforeEach(() => {
        TestBed.compileComponents();
    });

    describe('ListItemComponent', () => {
        beforeEach(async(() => {
            TestBed.compileComponents();
        }));

        it('can open when closed and item has children', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;

            expect(comp.canOpen()).toBeTruthy();
        });

        it('can not open when already open', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            comp.open = true;

             expect(comp.canOpen()).toBeFalsy();
         });

        it('can not open when item has no children', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = false;

            expect(comp.canOpen()).toBeFalsy();
        });

        it('can close when open and item has children', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = true;

            expect(comp.canClose()).toBeTruthy();
         });

        it('can not close when already closed', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = itemWithChildren;
            comp.open = false;

            expect(comp.canClose()).toBeFalsy();
         });

        it('can not close when item has no children', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = itemWithNoChildren;
            comp.open = true;

            expect(comp.canClose()).toBeFalsy();
         });

        it('is selected when treeSelector contains item in selected list', inject([TreeSelector], (treeSelector: TreeSelector) => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            treeSelector.singleSelect(comp.item);
            fixture.detectChanges();

            expect(comp.isSelected()).toBeTruthy();
         }));

        it('is not selected when treeSelector contains other items', () => {
            let fixture = TestBed.createComponent(ListItemComponent);
            let comp = fixture.debugElement.componentInstance;
            comp.item = new Item(1, "name");
            fixture.detectChanges();

            expect(comp.isSelected()).toBeFalsy();
         });
    });
}); 
