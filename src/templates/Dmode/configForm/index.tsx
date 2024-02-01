import { useObserver } from 'mobx-react-lite'

import styles from './index.module.scss'

const ConfigForm = () => {

  return useObserver(() => (
    <div className={styles.index}>
      <h3>模块</h3>


    </div>
  ))
}

export default ConfigForm
