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

//     Exemplo de resultado (em html):

// Resultado do Questionário

// Acertos: 8 de 10
// Nota: 8,0
// Situação: Aprovado

    let relatorio_resultado = <div>
        <h2>Resultado do Questionário</h2>
        <p>Acertos: {acertos} de {props.perguntas.length}</p>
        <p>Nota: {nota.toFixed(1)}</p>
        <p>Situação: {nota >= 7 ? "Aprovado" : "Reprovado"}</p>
    </div>
    
    return <>
        <center>
        <h1>Quiz</h1>
        <br />
        </center>
        <QuestaoMultipla
            perguntas={props.perguntas}
        />
    </>
}