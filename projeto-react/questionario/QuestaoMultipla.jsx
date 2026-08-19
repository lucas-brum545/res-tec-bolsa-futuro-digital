import { useState } from "react"

export default function QuestaoMultipla(props){
    const [respostaUsuario, setRespostaUsuario] = useState(null);

    function verificarResposta(respostaUsuario){
        setRespostaUsuario(respostaUsuario)
        let acertou = respostaUsuario===props.resposta
        props.onRespondeu(acertou)
    }

    let desativar = respostaUsuario != null

    let opcoes = props.opcoes.map((opcao) =>
        (respostaUsuario===null || respostaUsuario===opcao)?<button disabled={desativar} onClick={() => verificarResposta(opcao)}><strong>{opcao}</strong></button>:<button disabled onClick={() => verificarResposta(opcao)}>{opcao}</button>
    )



    return <>
    <div>
        {props.pergunta}
        {opcoes}
        {/* {condicaoRespondeu} */}
    </div>
    </>

}