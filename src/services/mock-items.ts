import { Item } from "../models/item";

export const ITEMS: Item[] = [
    {
        id: 1,
        name: "A - Level 1",
        children:
        [
            {
                id: 11,
                name: "A - Level 2-1",
                children: [],
            },
            {
                id: 12,
                name: "A - Level 2-2",
                children:
                [
                    { id: 111, name: "A - Level 3", children: [] },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "B - Level 1",
        children: [],
    },
    {
        id: 3,
        name: "C - Level 1",
        children:
        [{
            id: 31,
            name: "C - Level 2",
            children: [],
        }],
    },
];
