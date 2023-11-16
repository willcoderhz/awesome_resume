import { templates } from '../../templates/index.tsx'
import styles from './index.module.scss'
import {data} from "autoprefixer";
import {TemplateCard} from "../../components/build/RightSidebar/templateCard/TemplateCard.tsx";
export const IndexPage = () => {
    return (
        <div>
            <main>
                <div className="text-3xl mb-4 font-bold text-center text-gray-800 ">简历模板</div>
                <div className={styles.templates}>
                    <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                        <div className="relative mx-auto max-w-7xl">
                            <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">

                               {templates.map((it, i) => {
                                return (
                                        <div className={styles.template} key={i}>
                                            <TemplateCard value={it} onUse={() => toEditor({ params: { key: it.key } })} />
                                        </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )


}

export type Params = {
    key: string
}

export type Data = {
    data?: any
    config?: any
}

export function toEditor(options: { params: Params; data?: any; replace?: boolean }) {

    //console.log(options.params)
    if (options.replace === true || options.params.key === "developer-concise-2") {
        window.location.replace(`/resumeTemplatesUrlC?${JSON.stringify(options.params)}`)
    }
    else {
        window.open(`/resumeTemplatesUrlD?${JSON.stringify(options.params)}`, '_blank')
    }
    //window.open(`/resumeTemplatesUrlC?${JSON.stringify(options.params)}`, '_blank')
}
