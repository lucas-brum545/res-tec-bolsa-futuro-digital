import { useState } from "react"
export default function Formulario(props){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefones, setTelefones] = useState([]);
    function mudarNome(evento) {
        console.log(evento);
        console.log(evento.target.value);
        setNome(evento.target.value);
    }
    function adicinarTelefone() {
        let novosTelefones = [...telefones,""];
        setTelefones(novosTelefones);
    }

    function alterarTelefone(indice, novoValor) {
        let novosTelefones = [...telefones];
        novosTelefones[indice]=novoValor;
        setTelefones(novosTelefones);
    }
    function enviar() {
        let contato= {
            nome:nome,
            email:email,
            telefones:telefones
        };
        console.log(contato);
    }
    return <>
        <form action={enviar}>
            <label>Nome:<input value={nome} onChange={mudarNome} /></label>
            <br/><br/>
            <label>E-mail:
                <input 
                    value={email} 
                    onChange={evento=>setEmail(evento.target.value)} /></label>
            <br/><br/>
            <label>Telefones:
                {telefones.map( (telefone, indice)=><>
                            <br/> 
                            <input 
                                value={telefone} 
                                onChange={evento=>alterarTelefone(indice, evento.target.value) } /> 
                            </> )}
                <button type="button" onClick={adicinarTelefone}>➕</button></label>
            <br/><br/>
            <button type="submit">Cadastrar</button>
            <button type="button">Cancelar</button>
        </form>
    </>

}