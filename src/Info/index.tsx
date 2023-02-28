import { GithubFilled, MailFilled, PhoneFilled } from '@ant-design/icons'

import { info } from '../_template'
import styles from './index.module.less'

function App() {
  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div>
          <span>{info.name}</span>
          <div>
            <GithubFilled />
            <span>{info.github}</span>
          </div>
        </div>
        <span>{info.job}</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tags}>
          {info.tags.map((line, i) => (
            <span key={i}>{line.join('·')}</span>
          ))}
        </div>
        <div className={styles.contact}>
          <div>
            <span>{info.email}</span>
            <MailFilled />
          </div>
          <div>
            <span>{info.phone}</span>
            <PhoneFilled />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
