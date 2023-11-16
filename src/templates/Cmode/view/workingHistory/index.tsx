import { useObserver } from 'mobx-react-lite'
import styles from './index.module.scss'
import {ResumeModel_C} from "../../index.tsx";
import {Working} from "../working";
export const WorkingHistory = () => {
  const data = new ResumeModel_C

  return useObserver(() => (
    <div className={styles.index}>
      {data.defaultData.workingHistory.map((it, i1) => {
        return (
          <div className={styles.item} key={i1}>
            <Working name={it.title} time={[it.startTime, it.endTime]} content={it.content} />
          </div>
        )
      })}
    </div>
  ))
}
