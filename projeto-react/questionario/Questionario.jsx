import { useState } from "react"
import Questao from "../questionario/Questao"
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
    let mensagemParabens = "Parabéns!"
    let questoes = props.perguntas.map((item) => <Questao 
            key={item.id}
            pergunta={item.pergunta}
            resposta={item.resposta?"sim":"não"}
            onRespondeu={respondeu}
        />
    )

    
    let condicaoParabens = (acertos>=7 && respondidos == 10)?<h2>{mensagemParabens}</h2>:""
    let finalizacao = <h2>Sua nota foi: {acertos}<br></br>{condicaoParabens}</h2>
    let condicaoMudancaTela = respondidos<10?questoes:finalizacao

    let botaoMais = <button>+</button>
    let botaoMenos = <button>-</button>
    let valor = 0
    
    /* desafio */

    // mostrar media de acertos em uma nova tela 
    // mostrar parabens para o usuario caso ele acerte 7 ou mais
    return <>
        <center>
        <h1>Quiz</h1>
        {/* {condicaoMudancaTela} */}
        <br />
        </center>
        <QuestaoMultipla
            pergunta="Qual é a capital do Brasil?"
            opcoes={["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"]}
            resposta="Brasília"
            onRespondeu={(acertou) => {
                console.log(acertou);
            }}
            />
        {/* <h2>Acertos: {acertos}<br></br>
        Erros: {erros}<br></br>
        Respondidas: {respondidos}</h2><br></br> */}
        {/* {botaoMenos} */}
        {/* {valor} */}
        {/* {botaoMais} */}
    </>
}