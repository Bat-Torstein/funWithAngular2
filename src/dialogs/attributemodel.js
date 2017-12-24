"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeModel {
    constructor(name, label, value) {
        this.isRequired = false;
        this.name = name;
        this.label = label;
        this.value = value;
    }
    isValid() {
        return this.isLabelValid() && this.isValueValid();
    }
    isLabelValid() {
        return this.label.length ? true : false;
    }
    isValueValid() {
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
exports.AttributeModel = AttributeModel;
//# sourceMappingURL=attributemodel.js.map