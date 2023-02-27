import { useEffect, useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {

  }, [])
  
  return (
    <div className="App">
      <div id='markdown'>{markdown}</div>
    </div>
  )
}

export default App
