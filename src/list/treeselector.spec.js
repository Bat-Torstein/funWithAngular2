"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../models/item");
const treeselector_1 = require("./treeselector");
describe("TreeSelector", () => {
    let treeSelector;
    beforeEach(() => {
        treeSelector = new treeselector_1.TreeSelector();
    });
    it("should add item to selected list when single selecting", () => {
        const item = new item_1.Item(1, "name");
        treeSelector.singleSelect(item);
        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });
    it("should only have one item in list when single-selecting", () => {
        const item1 = new item_1.Item(1, "name");
        const item2 = new item_1.Item(2, "name");
        treeSelector.singleSelect(item1);
        treeSelector.singleSelect(item2);
        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });
    it("should add item to selected list when multi-selecting", () => {
        const item = new item_1.Item(1, "name");
        treeSelector.multiSelect(item);
        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });
    it("should add multiple items to selected list when multi-selecting", () => {
        const item1 = new item_1.Item(1, "name");
        const item2 = new item_1.Item(2, "name");
        treeSelector.multiSelect(item1);
        treeSelector.multiSelect(item2);
        expect(Object.keys(treeSelector.selectedItems).length).toBe(2);
    });
    it("should remove selected item from list when deselecting", () => {
        const item = new item_1.Item(1, "name");
        treeSelector.multiSelect(item);
        treeSelector.multiSelect(item);
        expect(Object.keys(treeSelector.selectedItems).length).toBe(0);
    });
    it("should regard item as selected when it is in the selected list", () => {
        const item = new item_1.Item(1, "name");
        treeSelector.singleSelect(item);
        expect(treeSelector.isSelected(item.id)).toBeTruthy();
    });
    it("should not regard item as selected when it is not in the selected list", () => {
        const item1 = new item_1.Item(1, "name");
        const item2 = new item_1.Item(2, "name");
        treeSelector.singleSelect(item2);
        expect(treeSelector.isSelected(item1.id)).toBeFalsy();
    });
});
//# sourceMappingURL=treeselector.spec.js.map