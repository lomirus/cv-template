import { GithubFilled, MailFilled, PhoneFilled } from '@ant-design/icons'

import { info } from '../_template'
import styles from './index.module.less'

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.name}>{info.name}</span>
          {info.github ? (
            <a
              className={styles.github}
              href={`https://github.com/${info.github}`}  target='_blank'
            >
              <GithubFilled />
              <span className={styles.username}>{info.github}</span>
            </a>
          ) : null}
        </div>
        <span className={styles.job}>{info.job}</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tags}>
          {info.tags.map((line, i) => (
            <span key={i}>{line.join(' · ')}</span>
          ))}
        </div>
        <div className={styles.contact}>
          <div>
            <MailFilled />
            <span>{info.email}</span>
          </div>
          <div>
            <PhoneFilled />
            <span>{info.phone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
