export const htmlTemplate = `
<span class='glyphicon' [class.glyphicon-plus] = 'canOpen()' [class.glyphicon-minus] = "canClose()" [class.selected] = "isSelected()" (click)="onClick($event)"> {{item.name }}</span>
<div *ngIf = "open">
    <ul>
        <li *ngFor = "let child of item.children">
            <list-item [item]="child"></list-item>
        </li>
    </ul>
</div>
`;