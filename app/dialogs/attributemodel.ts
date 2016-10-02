export class AttributeModel {
    name: string;
    label: string;
    value: string;
    validPattern : string;
    isRequired = false;

    constructor(name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    isValid(): boolean {
        return this.isLabelValid() && this.isValueValid();
    }

    isLabelValid(): boolean {
        return this.label.length ? true : false;
    }

    isValueValid(): boolean {
        if (!this.value) {
            if (this.isRequired) {
                return false;
            }

            return true;
        }

        if (this.validPattern) {
            let regEx = new RegExp(this.validPattern);
            return regEx.test(this.value);
        }

        return true;
    }
}