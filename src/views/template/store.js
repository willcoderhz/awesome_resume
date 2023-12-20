import { makeAutoObservable } from 'mobx';
import { templates } from "../../templates";
export class Store {
    constructor(key) {
        Object.defineProperty(this, "template", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "grayPreview", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "currentForm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'data'
        });
        this.template = templates.find((tmp) => tmp.key === key);
        const state = window.localStorage.getItem(key); // todo 这块写的可能有问题
        this.template.importConfig(state?.config);
        this.template.importData(state?.data);
        if (!state) {
            alert('已自动填充初始信息');
        }
        makeAutoObservable(this, {
            template: false,
        });
    }
    get availableTemplates() {
        return templates.filter((t) => t.dataForm === this.template.dataForm && t.key !== this.template.key);
    }
}
