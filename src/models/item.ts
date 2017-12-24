export class Item {
    public id: number;
    public name: string;
    public children: Item[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
