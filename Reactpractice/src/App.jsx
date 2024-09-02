import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <div className='opciones'>
          <h2>Login</h2>
          <h2>Home</h2>
          <h2>about US</h2>
          <h2>Contact</h2>
          <h2>Frequntly Asked Questions</h2>
        </div>

      </div>

    </>
  )
}

export default App
