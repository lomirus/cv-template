import { marked } from 'marked'

import { content } from '../_template'
import styles from './index.module.less'

function Content() {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  )
}

export default Content
