import styles from './App.module.less'
import Info from './Info'
import Content from './Content'

function App() {
  return (
    <div className={styles.App}>
      <Info />
      <Content />
    </div>
  )
}

export default App
