import Questao from "../questionario/Questao"

export default function Questionario(){
    return <>
        <h1>Quiz</h1>
        <Questao pergunta="Porto Alegre é a capital do Rio Grande do Sul? " resposta="sim">
        </Questao>
        <Questao pergunta="Novo Hamburgo é uma cidade de Santa Catarina? " resposta="não">
        </Questao>
        <br />
        <h2>Acertos: y/x</h2>
    </>
}

// tela branca: erro aparece no terminal ou no dev tools