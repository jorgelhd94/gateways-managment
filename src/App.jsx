import { useState } from 'react'
import Auth from './Views/Auth'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Auth></Auth>
    </div>
  )
}

export default App
