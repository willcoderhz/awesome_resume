import { useObserver } from 'mobx-react-lite'
import styles from './index.module.scss'
import {ResumeModel_D} from "../../index.tsx";

export const Header = () => {
  // const { data } = useTemplate<ResumeModel_C>()
  const data = new ResumeModel_D
  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.content}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.des}>
          <span>
            {[data.defaultData.data.basicInfo.birth, data.defaultData.data.basicInfo.sex, data.defaultData.data.basicInfo.location, data.name, data.defaultData.data.basicInfo.cellphone, data.defaultData.data.basicInfo.email].filter(Boolean).join(' ∕ ')}
          </span>
          <br />
          {/*<span>{`${data.defaultData.sections.graduationTime} 年毕业于 ${data.defaultData.education.schoolName} - ${data.defaultData.education.major}`}</span>*/}
        </div>
      </div>
    </div>
  ))
}





