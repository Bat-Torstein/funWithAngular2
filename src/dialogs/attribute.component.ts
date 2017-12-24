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
    templateUrl: "./attribute.component.html",
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
