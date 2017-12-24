import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AttributeModel } from "./attributemodel";

@Component({
    selector: "[attribute-row]",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AttributeComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AttributeComponent),
            multi: true,
        },
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
`,
})
export class AttributeComponent implements ControlValueAccessor {
    public attribute = new AttributeModel("", "", "");

    public onChange = (_: any) => {/**/};
    public onTouched = (_: any) => {/**/};

    public writeValue(value: any) {
        if (value) {
            this.attribute = value;
        }
    }

    public registerOnChange(fn) {
        this.onChange = fn;
    }

    public registerOnTouched(fn) {
        this.onTouched = fn;
    }

    public validate(c: FormControl) {
        if (this.attribute.isValid()) {
            return null;
        }

        return "Invalid ";
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
}
