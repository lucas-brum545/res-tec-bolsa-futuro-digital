import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Questionario from '../questionario/Questionario'
import listaPerguntas from '../service/listaPerguntas'

function App() {
  return (
    <div>
        <Questionario perguntas={listaPerguntas} />
    </div>
  )
}

export default App
