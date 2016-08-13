import { Injectable } from '@angular/core';

import { Item } from '../models/item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    getItems() {
        return Promise.resolve(ITEMS);
    }

    getItemsSlowly() {
        return new Promise<Item[]>(resolve =>
            setTimeout(() => resolve(ITEMS), 2000) // 2 seconds
        );
    }

    getItem(id: number) {
        return Promise.resolve(ITEMS).then(
            items => items.filter(item => item.id === id)[0]
        );
    }
}