import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Item } from '../models/item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    public getItems(): Observable<Item[]> {
        const items = [
            new Item(1, 'A - Level 1', [
                new Item(11, 'A - Level 2-1'),
                new Item(12, 'A - Level 2-2', [
                    new Item(111, 'A - Level 3')
                ])
            ]),
            new Item(2, 'B - Level 1'),
            new Item(3, 'C - Level 1', [
                new Item(31, 'C - Level 2')
            ])
        ];

        return Observable.of(items);
    }
}
