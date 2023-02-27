import { marked } from 'marked'

import { content } from './_template'
import styles from './App.module.less'
import Info from './Info'

function App() {
  return (
    <div className={styles.App}>
      <Info />
      <div id='content' dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  )
}

export default App
