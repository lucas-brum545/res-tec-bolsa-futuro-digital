import { useState } from "react"
import QuestaoMultipla from "./QuestaoMultipla"

export default function Questionario(props){
    const [acertos,setAcertos] = useState(0)
    const [erros, setErros] = useState(0)
    

    function respondeu(acertou){
         if(acertou){
             setAcertos(acertos+1)
         }
         else{
             setErros(erros+1)
         }
    }
    
    let respondidos = acertos + erros
    let nota = (acertos / props.perguntas.length) * 10

    let questaoMultipla = props.perguntas.map(pergunta => <QuestaoMultipla
            perguntas={pergunta.pergunta}
            opcoes={pergunta.opcoes}
            resposta={pergunta.resposta}
            onRespondeu={respondeu}
        />)

    let relatorioResultado = <div>
        <h2>Resultado do Questionário</h2>
        <p>Acertos: {acertos} de {props.perguntas.length}</p>
        <p>Nota: {nota.toFixed(1)}</p>
        <p>Situação: {nota >= 7 ? "Aprovado" : "Reprovado"}</p>
    </div>

    let condicaoMudancaTela = (respondidos!=10)?questaoMultipla:relatorioResultado

    return <>
        <h1><strong>QUIZ</strong></h1>
        <br />
        {condicaoMudancaTela}
    </>
}