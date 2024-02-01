import { useObserver } from 'mobx-react-lite'
import styles from './index.module.scss'
import {ResumeModel_C} from "../../index.tsx";

export const Header = () => {
  // const { data } = useTemplate<ResumeModel_C>()
  const data = new ResumeModel_C
  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.content}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.des}>
          <span>
            {[data.defaultData.age, data.defaultData.gender, data.defaultData.city, data.defaultData.target, data.defaultData.phoneNumber, data.defaultData.email].filter(Boolean).join(' ∕ ')}
          </span>
          <br />
          <span>{`${data.defaultData.education.graduationTime} 年毕业于 ${data.defaultData.education.schoolName} - ${data.defaultData.education.major}`}</span>
        </div>
      </div>
    </div>
  ))
}
