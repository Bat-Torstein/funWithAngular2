import {TestBed, TestComponentBuilder, inject, ComponentFixture, async, tick, fakeAsync, flushMicrotasks} from '@angular/core/testing';
import {ListComponent} from '../../app/list/list.component';
import {Item} from '../../app/models/item';
import {ItemService} from '../../app/services/item.service';
import {TreeSelector} from '../../app/list/treeselector';

class MockItemService extends ItemService {
    getItems() {
        return Promise.resolve([]);
    }

    getItem(id: number) {
        return Promise.resolve(new Item(1,"name"));
    }
}

describe('ListComponent', () => {
    TestBed.compileComponents();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent],
            providers: [
                {provide: ItemService, useClass: MockItemService}
            ]
        });
        TestBed.compileComponents();
    }));

    it('should display a list of items', () => {
        let fixture = TestBed.createComponent(ListComponent);
        fixture.componentInstance.items = [new Item(1, "first"), new Item(2, "second")];
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelectorAll('li').length).toBe(2);
    });
}); 
