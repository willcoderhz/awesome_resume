import { templates } from '../../templates/index.tsx'
import styles from './index.module.scss'
import {data} from "autoprefixer";
import {TemplateCard} from "../../components/build/RightSidebar/templateCard/TemplateCard.tsx";
export const IndexPage = () => {
    return (
        <div>
            <main>
                <div className={styles.title}>简历模板</div>
                <div className={styles.templates}>
                    {templates.map((it, i) => {
                        return (
                            <div className={styles.template} key={i}>
                                <TemplateCard value={it} onUse={() => toEditor({ params: { key: it.key } })} />
                            </div>
                        )
                    })}
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

    console.log(data)

    window.open(`/resumeTemplatesUrl?${JSON.stringify(options.params)}`, '_blank')
}
