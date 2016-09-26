import { TreeSelector } from '../../app/list/treeselector';
import { Item } from '../../app/models/item';

describe('TreeSelector', () => {
    let treeSelector: TreeSelector;

    beforeEach(() => {
        treeSelector = new TreeSelector()
    });

    it('should add item to selected list when single selecting', () => {
        let item = new Item(1, "name");

        treeSelector.singleSelect(item);

        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });

    it('should only have one item in list when single-selecting', () => {
        let item1 = new Item(1, "name");
        let item2 = new Item(2, "name");

        treeSelector.singleSelect(item1);
        treeSelector.singleSelect(item2);

        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });

    it('should add item to selected list when multi-selecting', () => {
        let item = new Item(1, "name");

        treeSelector.multiSelect(item);

        expect(Object.keys(treeSelector.selectedItems).length).toBe(1);
    });

    it('should add multiple items to selected list when multi-selecting', () => {
        let item1 = new Item(1, "name");
        let item2 = new Item(2, "name");

        treeSelector.multiSelect(item1);
        treeSelector.multiSelect(item2);

        expect(Object.keys(treeSelector.selectedItems).length).toBe(2);
    });

    it('should remove selected item from list when deselecting', () => {
        let item = new Item(1, "name");
        
        treeSelector.multiSelect(item);
        treeSelector.multiSelect(item);

        expect(Object.keys(treeSelector.selectedItems).length).toBe(0);
    });

    it('should regard item as selected when it is in the selected list', () => {
        let item = new Item(1, "name");

        treeSelector.singleSelect(item);

        expect(treeSelector.isSelected(item.id)).toBeTruthy();
    });

    it('should not regard item as selected when it is not in the selected list', () => {
        let item1 = new Item(1, "name");
        let item2 = new Item(2, "name");

        treeSelector.singleSelect(item2);

        expect(treeSelector.isSelected(item1.id)).toBeFalsy();
    });
}); 
