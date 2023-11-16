import { templates } from '../../templates/index.tsx'
import {TemplateCard} from "./TemplateCard.tsx";


export const IndexPage = () => {
    return (
        <div>
            <div >简历模板</div>
            <div >
                {templates.map((it, i) => {
                    return (
                        <div  key={i}>
                            <TemplateCard value={it}  />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
