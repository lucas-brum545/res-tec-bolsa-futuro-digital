import { useState } from "react"

export default function QuestaoMultipla(props){
    const [respostaUsuario, setRespostaUsuario] = useState(null)

    function respondeu(resposta){
        setRespostaUsuario(resposta)
        let acertou = resposta==props.resposta
        props.onRespondeu(acertou)
    }

    let desativar = respostaUsuario !== null

    let opcoes = props.opcoes.map((opcao) =>
        (respostaUsuario===null || respostaUsuario===opcao)?<button disabled={desativar} onClick={() => respondeu(opcao)}><strong>{opcao}</strong></button>:<button disabled onClick={() => verificarResposta(opcao)}>{opcao}</button>
    )


    return <>
    <div>
        {props.pergunta}
        {opcoes}
        {respostaUsuario==props.resposta?"Acertou":(respostaUsuario!==null?"Errou":"")}
        {/* {condicaoRespondeu} */}
    </div>
    </>

}