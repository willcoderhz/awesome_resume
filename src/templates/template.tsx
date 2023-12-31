import { makeObservable, observable, toJS } from 'mobx'
import React, { ElementType, FC, ReactNode } from 'react'

const TemplateContext = React.createContext<BaseTemplate>(undefined as any)

//这段代码定义了一个名为useTemplate的React Hook，
// 它用于从React上下文中获取数据。该函数使用React.useContext方法获取上下文对象，并将其类型断言为T类型
export function useTemplate<T = unknown>(): T {
    return React.useContext(TemplateContext) as T
}

export const TemplateProvider: FC<{ value: BaseTemplate; children: ReactNode }> = ({ value, children }) => {
    return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>
}

export abstract class BaseTemplate<D = unknown, C = unknown> {
    constructor() {
        makeObservable(this, {
            data: observable,
            config: observable,
        })
    }

    abstract key: string
    abstract name: string
    abstract tags?: string[]
    abstract poster: string
    abstract view: React.ElementType
    abstract configForm: React.ElementType
    abstract dataForm: React.ElementType
    abstract defaultData: D
    abstract defaultConfig: C

    exportConfig() {
        return toJS(this.config)
    }

    exportData() {
        return toJS(this.data)
    }

    importData(data?: D) {
        if (data) {
            this.data = data
        } else {
            this.data = toJS(this.defaultData)
        }
    }

    importConfig(config?: C) {
        if (config) {
            this.config = config
        } else {
            this.config = toJS(this.defaultConfig)
        }
    }

    abstract provider: ElementType<{ children: ReactNode }>

    config: C = undefined as any

    data: D = undefined as any
}
