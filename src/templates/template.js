import { jsx as _jsx } from "react/jsx-runtime";
import { makeObservable, observable, toJS } from 'mobx';
import React from 'react';
const TemplateContext = React.createContext(undefined);
//这段代码定义了一个名为useTemplate的React Hook，
// 它用于从React上下文中获取数据。该函数使用React.useContext方法获取上下文对象，并将其类型断言为T类型
export function useTemplate() {
    return React.useContext(TemplateContext);
}
export const TemplateProvider = ({ value, children }) => {
    return _jsx(TemplateContext.Provider, { value: value, children: children });
};
export class BaseTemplate {
    constructor() {
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        makeObservable(this, {
            data: observable,
            config: observable,
        });
    }
    exportConfig() {
        return toJS(this.config);
    }
    exportData() {
        return toJS(this.data);
    }
    importData(data) {
        if (data) {
            this.data = data;
        }
        else {
            this.data = toJS(this.defaultData);
        }
    }
    importConfig(config) {
        if (config) {
            this.config = config;
        }
        else {
            this.config = toJS(this.defaultConfig);
        }
    }
}
