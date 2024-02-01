import { useObserver } from 'mobx-react-lite'
import styles from './index.module.scss'
import {ResumeModel_C} from "../../index.tsx";

export const OwnerProjects = () => {
  // const { data, config } = useTemplate<ResumeModel_C>()
  const data = new ResumeModel_C
  const config = data.defaultConfig
  return useObserver(() => (
    <div className={styles.index}>
      {data.defaultData.projects.map((it, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.header}>
              <div className={styles.name}>{it.title}</div>
              <div className={styles.time}></div>
            </div>
            <div className={styles.des} dangerouslySetInnerHTML={{ __html: it.content.replace(/\n/g, '<br/>') }}></div>
          </div>
        )
      })}
      {config.githubVisible && (
        <div className={styles.more}>
          ➱ 更多我的个人项目请看 GitHub：
          <span
            style={{
              textDecoration: 'underline',
            }}
          >
            {data.defaultData.github}
          </span>
        </div>
      )}
    </div>
  ))
}
