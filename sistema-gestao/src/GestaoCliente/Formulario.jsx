export default function Formulario(props){
    function receber(formData){
        let cliente ={}
        cliente.nome = formData.get("nome")
        cliente.email = formData.get("email")
        cliente.tipo = formData.get("tipo")
        cliente.cidade = formData.get("cidade")
        cliente.receber = formData.get("receber")=="sim"

        props.onEnviar(cliente)

        // alert('O formulário foi enviado. ' + nome + ", " + email + tipo)
    }

    return <>
    <form action={receber}>
        <label >Nome: <input name="nome" required/></label>
        <br />
        <br />
        <label >E-mail: <input name="email" type="email" required/></label>
        <br />
        <br />
        <label>
        <input type="radio" name="tipo" value="pf"/>
        Pessoa Física
        </label>
        <label>
        <input type="radio" name="tipo" value="pj"/>
        Pessoa Jurídica
        </label>
        <br />
        <br />
        <input type="checkbox" /><label htmlFor="">Receber e-mail</label>
        <br />
        <br />

        <label htmlFor="">Cidade: 
        <select name="cidade">
            <option value="poa">Porto Alegre</option>
            <option value="cns">Canoas</option>
            <option value="nh">Novo Hamburgo</option>
            <option value="outras">Outras</option>
        </select>
        </label>
        <br />
        <br />

        <button type='submit'>Cadastrar</button>  <button type='reset'>Limpar</button>
    </form>
    </>
}