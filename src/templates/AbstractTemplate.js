import { jsx as _jsx } from "react/jsx-runtime";
import { createForm, FormPath, onFieldInputValueChange } from '@formily/core';
import { toJS } from 'mobx';
import { BaseTemplate } from "./template.tsx";
export class AbstractTemplate extends BaseTemplate {
    constructor() {
        super();
        Object.defineProperty(this, "provider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "form", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.form = createForm({
            initialValues: this.data,
            effects: () => {
                onFieldInputValueChange('*', (field) => {
                    FormPath.setIn(this.data, field.path, field.value);
                });
            },
        });
        this.provider = ({ children }) => {
            return (_jsx("div", { children: "formily/core" }));
        };
    }
    importData(data) {
        if (data) {
            this.data = data;
        }
        else {
            this.data = toJS(this.defaultData);
        }
        this.form.setValues(this.data);
    }
}
