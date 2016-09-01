﻿import {TestComponentBuilder,inject, ComponentFixture} from '@angular/core/testing';
import {ListItemComponent} from '../../app/list/listitem.component';
import {TreeSelector} from '../../app/list/treeselector';
import {Item} from '../../app/models/item';

describe('ListItemComponent', () => {
    let listItemComponent: ListItemComponent;
    let treeSelector: TreeSelector;
    let itemWithChildren = new Item();
    itemWithChildren.id = 1;
    itemWithChildren.children = [];
    itemWithChildren.children.push(new Item());
    let itemWithNoChildren = new Item();
    itemWithChildren.id = 2;

    beforeEach(() => {
        treeSelector = new TreeSelector();
        listItemComponent = new ListItemComponent(treeSelector);
    });

    it('can open when closed and item has children', () => {
        listItemComponent.item = itemWithChildren;
        listItemComponent.open = false;

        expect(listItemComponent.canOpen()).toBeTruthy();
    });

    it('can not open when already open', () => {
        listItemComponent.item = new Item();
        listItemComponent.open = true;

        expect(listItemComponent.canOpen()).toBeFalsy();
    });

    it('can not open when item has no children', () => {
        listItemComponent.item = itemWithNoChildren;
        listItemComponent.open = false;

        expect(listItemComponent.canOpen()).toBeFalsy();
   });

    it('can close when open and item has children', () => {
        listItemComponent.item = itemWithChildren;
        listItemComponent.open = true;

        expect(listItemComponent.canClose()).toBeTruthy();
    });

    it('can not close when already closed', () => {
        listItemComponent.item = itemWithChildren;
        listItemComponent.open = false;

        expect(listItemComponent.canClose()).toBeFalsy();
    });

    it('can not close when item has no children', () => {
        listItemComponent.item = itemWithNoChildren;
        listItemComponent.open = true;

        expect(listItemComponent.canClose()).toBeFalsy();
    });

    it('is selected when treeSelector contains item in selected list', () => {
        listItemComponent.item = new Item();
        listItemComponent.item.id = 1;
        treeSelector.singleSelect(listItemComponent.item);

        expect(listItemComponent.isSelected()).toBeTruthy();
    });

    it('is not selected when treeSelector contains other items', () => {
        listItemComponent.item = new Item();
        listItemComponent.item.id = 1;

        expect(listItemComponent.isSelected()).toBeFalsy();
    });
}); 