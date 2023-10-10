import { useState } from 'react'
import Cards from './components/Cards'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body-game'>
        <h2>Memory Game</h2>
        <Cards/>
      </div>
    </>
  )
}

export default App
