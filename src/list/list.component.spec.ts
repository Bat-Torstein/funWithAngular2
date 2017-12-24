import { async, ComponentFixture, fakeAsync, flushMicrotasks, inject, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { PipesModule } from '../pipes/pipes.module';
import { ItemService } from '../services/item.service';

import { Item } from '../models/item';
import { ListComponent } from './list.component';
import { ListItemComponent } from './listitem.component';
import { TreeSelector } from './treeselector';

class MockItemService extends ItemService {
    public getItems() {
        return Observable.of([new Item(1, 'first'), new Item(2, 'second')]);
    }
}

describe('ListComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent, ListItemComponent],
            providers: [
                { provide: ItemService, useClass: MockItemService },
            ],
            imports: [FormsModule, PipesModule],
        }).compileComponents();
    }));

    it('should display a list of items', () => {
        const fixture = TestBed.createComponent(ListComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelectorAll('li').length).toBe(2);
    });
});
