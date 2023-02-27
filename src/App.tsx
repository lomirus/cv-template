import { marked } from 'marked'

import { info, content } from './_template'
import styles from './App.module.less'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.info}>
        <div className={styles.top}>
          <div>
            <span>{info.name}</span>
            <div>
              <img src='' alt='github icon' />
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
              <img src='' alt='email icon' />
            </div>
            <div>
              <span>{info.phone}</span>
              <img src='' alt='phone icon' />
            </div>
          </div>
        </div>
      </div>
      <div id='content' dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  )
}

export default App
