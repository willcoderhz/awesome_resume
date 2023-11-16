import {BaseTemplate} from '../../templates/template.tsx'
import styles from './index.module.scss'
import { Button, Tag } from 'antd'
import { FC } from 'react'
interface TempalteCardProps {
    value: BaseTemplate
}

export const TemplateCard: FC<TempalteCardProps> = ({ value}) => {
    return (
        <div className={styles.mask}>
            <div className={styles.name}>{value.name}</div>
            <div className={styles.tags}>
                {value.tags?.map((tag, i) => {
                    return <Tag key={i}>{tag}</Tag>
                })}
            </div>
            <Button type="primary" >
                <a href="/resumeTemplatesUrl"> 使用该模板</a>
            </Button>
        </div>
    )
}



