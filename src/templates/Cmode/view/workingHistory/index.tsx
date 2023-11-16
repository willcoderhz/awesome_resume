import { useObserver } from 'mobx-react-lite'
import { useTemplate } from '../../../index.tsx'
import { ResumeModel_C } from '../../resumeModel_C.tsx'
import styles from './index.module.scss'

export const WorkingHistory = () => {
  const { data } = useTemplate<ResumeModel_C>()

  return useObserver(() => (
    <div className={styles.index}>
      {data.workingHistory.map((it, i1) => {
        return (
          <div className={styles.item} key={i1}>
            Working
          </div>
        )
      })}
    </div>
  ))
}
