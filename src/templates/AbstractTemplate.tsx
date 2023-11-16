import { createForm, Form, FormPath, onFieldInputValueChange } from '@formily/core'
import { toJS } from 'mobx'
import { ElementType, ReactNode } from 'react'
import {BaseTemplate} from "./template.tsx";

export abstract class AbstractTemplate<D, C> extends BaseTemplate<D, C> {
    constructor() {
        super()
        this.form = createForm({
            initialValues: this.data as any,
            effects: () => {
                onFieldInputValueChange('*', (field) => {
                    FormPath.setIn(this.data, field.path, field.value)
                })
            },
        })

        this.provider = ({ children }: { children: ReactNode }) => {
            return (
                <div>
                    formily/core
                </div>
            )
        }
    }

    importData(data?: D): void {
        if (data) {
            this.data = data
        } else {
            this.data = toJS(this.defaultData)
        }

        this.form.setValues(this.data)
    }

    provider: ElementType<{ children: ReactNode }>

    form: Form
}
