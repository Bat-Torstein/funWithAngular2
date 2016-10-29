import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl} from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    selector: '[attribute-row]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AttributeComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AttributeComponent),
            multi: true
        }
    ],
    template: `
<td>
    <input [(ngModel)]="attributeLabel" class="form-control" #name="ngModel"/>
    <div *ngIf="!name.pristine && !attribute.isLabelValid()" class="alert alert-danger">name is required</div>
</td>
<td>
    <div class="has-feedback">
        <input [(ngModel)]="attributeValue" class="form-control" #attr="ngModel" />
        <span class="glyphicon glyphicon-fullscreen form-control-expand form-control-feedback" (click)="textarea.open()"></span>
    </div>
    <div *ngIf="!attr.pristine && !attribute.isValueValid()" class="alert alert-danger">{{attributeLabel}} is incorrect</div>
</td>
<textarea-dialog
        #textarea
        [attribute]="attribute">
</textarea-dialog>
`
})
export class AttributeComponent implements ControlValueAccessor {
    onChange = (_: any) => { };
    onTouched = (_: any) => { };
    attribute = new AttributeModel("","","");

    writeValue(value: any) {
        if (value) {
            this.attribute = value;
        }
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    get attributeLabel() {
        return this.attribute.label;
    }

    set attributeLabel(val) {
        this.attribute.label = val;
        this.onChange(this.attribute);
    }

    get attributeValue() {
        return this.attribute.value;
    }

    set attributeValue(val) {
        this.attribute.value = val;
        this.onChange(this.attribute);
    }

    validate(c: FormControl) {
        if (this.attribute.isValid()) {
            return null;
        }

        return "Invalid ";
    }
} 