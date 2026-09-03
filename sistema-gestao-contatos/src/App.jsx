import { useState } from 'react'
import GestaoContatos from './GestaoContatos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GestaoContatos />
    </>
  )
}

export default App
