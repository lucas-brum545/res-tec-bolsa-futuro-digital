import { useState } from "react" // hook

export default function Questao(props){
    const [respostaUsuario, setRespostaUsuario] = useState(null); // ESTADO: toda vez que um componente é renderizado

    function verificarResposta(respostaUsuario){
        let acertos = 0
        setRespostaUsuario(respostaUsuario)
        let acertou = respostaUsuario===props.resposta
        props.onRespondeu(acertou)
    }
    

    let desativar = respostaUsuario != null
    let textoResultado = ""

    if(respostaUsuario==props.resposta){
        textoResultado="Acertou!"
    }

    else if(respostaUsuario!=null){
        textoResultado="Errou!"
    }

    let botaoSim = null
    let botaoNao = null

    botaoSim = (respostaUsuario===null || respostaUsuario=='sim')?<button disabled={desativar} onClick={() => verificarResposta("não")}>Sim</button>:null
    botaoNao = (respostaUsuario===null || respostaUsuario=='não')?<button disabled={desativar} onClick={() => verificarResposta("sim")}>Não</button>:null



    return <>
        <div>
            {props.pergunta}
            {botaoSim}
            {botaoNao}
            {textoResultado}
        </div>
    </>
}