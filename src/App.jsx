import { useState } from 'react'
import './App.css'
import Frame from './structure/Frame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Frame/>
    </div>
  )
}

export default App
