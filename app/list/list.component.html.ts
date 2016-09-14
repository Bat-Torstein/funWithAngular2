export const htmlTemplate = `

<input #testInput [(ngModel)] = "textValue" (keyup.enter)="upperText()" />
<span>{{testInput.value}}</span>
<ul>
    <li *ngFor = "let item of items">
        <list-item [item] ="item"></list-item>
    </li>
</ul>

<h4>Selected items:</h4>
<ul>
    <li *ngFor = "let item of treeSelector.selectedItems | mapToIterable">
        {{item.name}}
    </li>
</ul>
`;