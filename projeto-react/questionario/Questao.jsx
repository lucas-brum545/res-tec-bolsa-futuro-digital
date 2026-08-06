import { useState } from "react" // hook


export default function Questao(props){
    const [resultado, setResultado] = useState("")

    function verificarResposta(respostaUsuario){
        if(props.resposta == respostaUsuario){
            setResultado("acertou!")
        }
        else{
            setResultado("errou!")
        }
    }

    let desativar = resultado != ""

    return <>
        <div>
            {props.pergunta}
            <button disabled={desativar} onClick={() => verificarResposta("sim")}>Sim</button>
            <button disabled={desativar} onClick={() => verificarResposta("não")}>Não</button>
            {resultado}
        </div>
    </>
}