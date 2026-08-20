import { useState } from "react"

export default function QuestaoMultipla(props){
    console.log(props.perguntas)
    const [respostaUsuario, setRespostaUsuario] = useState(null);

    function verificarResposta(respostaUsuario){
        setRespostaUsuario(respostaUsuario)
        let acertou = respostaUsuario===props.resposta
        props.onRespondeu(acertou)
    }



    let desativar = respostaUsuario != null

    let perguntas = props.perguntas.map((item) =>
        <div key={item.id}>
            <h2>{item.pergunta}</h2>
            {item.opcoes.map((opcao) => (
                (respostaUsuario===null || respostaUsuario===opcao)?
                <button disabled={desativar} onClick={() => verificarResposta(opcao)}><strong>{opcao}</strong></button>:
                <button disabled onClick={() => verificarResposta(opcao)}>{opcao}</button>
            ))}
        </div>
    )

    return <>
    <div>
        {perguntas}
    </div>
    </>

}