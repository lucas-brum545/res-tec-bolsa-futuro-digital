import { useState } from "react";

export default function Form(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefones, setTelefones] = useState([])

    function mudarNome(evento){
        setNome(evento.target.value)
    }

    function adicionarTelefone(){
        let novosTelefones = [...telefones, ""]
        setTelefones(novosTelefones)
    }

    function alterarTelefone(indice, novoValor){
        let novosTelefones = [...telefones]
        novosTelefones[indice] = novoValor
        setTelefones(novosTelefones)
    }
    function removerTelefone(indiceExcluir){
        let novosTelefones = telefones.filter(
            function(valorElemento, indice){
                return indice!=indiceExcluir
            }
        )
        setTelefones(novosTelefones)
    }

    function enviar(){
        let contato = {
            nome: nome,
            email: email,
            telefones:telefones
        }
        
        console.log(contato)
        props.onEnviar(contato)
        setNome("")
        setEmail("")
        setTelefones([])
    }

    return (
        <>
            <form action={enviar}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={mudarNome}
                    />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={evento=>setEmail(evento.target.value)}
                    />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="telefone">
                        Telefones: 
                        {telefones.map((telefone, indice)=><>
                        <br /> 
                        <input 
                            value={telefone}
                            onChange={evento=>alterarTelefone(indice, evento.target.value)}></input>
                        <button type="button" onClick={(() => removerTelefone)}>➖</button>
                        </>)}
                        <button type="button" onClick={adicionarTelefone}>➕</button>
                    </label>
                    <br />
                    <br />
                </div>
                <button type="submit">Salvar</button>
                <button type="button" onClick={props.onCancelar}>Cancelar</button>
            </form>
        </>
    );
}       