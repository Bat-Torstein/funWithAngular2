export class Item {
    id: number;
    name: string;
    children: Item[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}