import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl} from '@angular/forms';
import { AttributeModel } from './attributemodel';

@Component({
    moduleId: module.id,
    selector: '[attribute-row]',
    templateUrl: 'attribute.component.html',
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
    ]
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