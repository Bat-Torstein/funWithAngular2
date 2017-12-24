export class AttributeModel {
    public name: string;
    public label: string;
    public value: string;
    public validPattern: string;
    public isRequired = false;

    constructor(name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public isValid(): boolean {
        return this.isLabelValid() && this.isValueValid();
    }

    public isLabelValid(): boolean {
        return this.label.length ? true : false;
    }

    public isValueValid(): boolean {
        if (!this.value) {
            if (this.isRequired) {
                return false;
            }

            return true;
        }

        if (this.validPattern) {
            const regEx = new RegExp(this.validPattern);
            return regEx.test(this.value);
        }

        return true;
    }
}
