import { useState } from 'react'
import Calculadora from '../Calculadora/Calculadora.jsx'
import Calculadora3 from '../Calculadora3/Calculadora3.jsx'
import Login from '../Login/Login.jsx'
import Media from '../Media/Media.jsx'
import DivisaoConta from '../DivisaoConta/DivisaoConta.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2><strong>Questão 1</strong></h2>
      <Calculadora />
      <h2><strong>Questão 3</strong></h2>
      <Login />
      <h2><strong>Questão 4</strong></h2>
      <Media />
      <h2><strong>Questão 9</strong></h2>
      <DivisaoConta />
      <h2><strong>Questão 2</strong></h2>
      <Calculadora3 />
    </>
  )
}

export default App
