export class Item {
    public id: number;
    public name: string;
    public children: Item[];

    constructor(id: number, name: string, children?: Item[]) {
        this.id = id;
        this.name = name;
        this.children = children || [];
    }
}
