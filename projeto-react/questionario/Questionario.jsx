import { useState } from "react"
import Questao from "../questionario/Questao"

export default function Questionario(){
    const [acertos,setAcertos] = useState(0)

    function respondeu(acertou){
        if(acertou){
            setAcertos(acertos+1)
        }
        
    }

    return <>
        <h1>Quiz</h1>
        <Questao pergunta="Porto Alegre é a capital do Rio Grande do Sul? " resposta="sim" onRespondeu={respondeu}>
        </Questao>
        <Questao pergunta="Novo Hamburgo é uma cidade de Santa Catarina? " resposta="não" onRespondeu={respondeu}>
        </Questao>
        <br />
        <h2>Acertos: {acertos}/2</h2>
    </>
}

