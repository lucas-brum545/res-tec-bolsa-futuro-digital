// import { useState } from "react"

// export default function QuestaoMultipla(props){
//     //console.log(props.perguntas)
//     const [respostaUsuario, setRespostaUsuario] = useState(null);

//     function verificarResposta(respostaUsuario){
//         setRespostaUsuario(respostaUsuario)
//         let acertou = respostaUsuario===props.resposta
//         props.onRespondeu(acertou)
//     }

//     let desativar = respostaUsuario != null

//     let perguntas = props.perguntas.map((pergunta) =>
//         <div key={pergunta.id}>
//             <h3>{pergunta.pergunta}</h3>
//             {pergunta.opcoes.map((opcao) => (
//                 (respostaUsuario===null || respostaUsuario===opcao)?
//                 <button disabled={desativar} onClick={() => verificarResposta(opcao)}><strong>{opcao}</strong></button>:
//                 <button disabled onClick={() => verificarResposta(opcao)}>{opcao}</button>
//             ))}
//         </div>
//     )

//     return <>
//     <div>
//         {perguntas}
//     </div>
//     </>

// }

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
        // nao mostrar na tela os botoes que o usuario nao clicou, caso ele ja tenha clicado em algum
        (respostaUsuario===null || respostaUsuario===opcao)?<button disabled={desativar} onClick={() => respondeu(opcao)}><strong>{opcao}</strong></button>:""   
    )

    return <>
    <div>
        {props.perguntas}
        <br />
        {opcoes}
        <b>{respostaUsuario==props.resposta?"Acertou":(respostaUsuario!==null?"Errou":"")}</b>
        {/* {condicaoRespondeu} */}
    </div>
    </>

}