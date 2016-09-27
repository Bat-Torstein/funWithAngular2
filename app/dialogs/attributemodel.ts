export class AttributeModel {
    name: string;
    label: string;
    value: string;
    validPattern = "";
    isRequired = false;

    constructor(name: string, label: string, value: string) {
        this.name = name;
        this.label = label;
        this.value = value;
    }
}