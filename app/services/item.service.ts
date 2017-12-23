import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Item } from "../models/item";
import { ITEMS } from "./mock-items";

@Injectable()
export class ItemService {
   public getItems(): Observable<Item> {
        return Observable.from(ITEMS);
    }
}
