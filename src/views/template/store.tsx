import { makeAutoObservable } from 'mobx'
import {templates} from "../../templates";
import {BaseTemplate} from "../../templates/template.tsx";



export class Store {
  template: BaseTemplate

  grayPreview = false

  constructor(key: string) {
    this.template = templates.find((tmp) => tmp.key === key)!
    const state: any =  window.localStorage.getItem(key)// todo 这块写的可能有问题

    this.template.importConfig(state?.config)
    this.template.importData(state?.data)

    if (!state) {
      alert('已自动填充初始信息')
    }

    makeAutoObservable(this, {
      template: false,
    })
  }

  currentForm: 'data' | 'config' | 'template' = 'data'

  get availableTemplates() {
    return templates.filter((t) => t.dataForm === this.template.dataForm && t.key !== this.template.key)
  }

}
