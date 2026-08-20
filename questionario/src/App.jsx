import './App.css'
import Questionario from '../questionario/Questionario'
import perguntas from '../service/perguntas'

function App() {
  return (
    <div class='left-text'>
      <Questionario perguntas={perguntas} />
      </div>
  )
}

export default App
