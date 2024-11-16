import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)


  const addValue = () => {
    setCounter(counter + 1)

    // setCounter(prevCountet => prevCountet + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>this is react course</h1>
      <h2>this is a coumter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>this peragraf: {counter}</p>
    </>
  )
}

export default App
