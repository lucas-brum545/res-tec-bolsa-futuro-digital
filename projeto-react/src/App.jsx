import Questionario from "../questionario/Questionario"
import listaPerguntas from "./service/listaPerguntas"

export default function App(){
  return <>
  <div>
    <Questionario perguntas={listaPerguntas}/>
  </div>
  </>
}