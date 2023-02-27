import { marked } from 'marked'

import { info, content } from './_template'

function App() {
  return (
    <div className="App">
      <div id='content' dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  )
}

export default App
