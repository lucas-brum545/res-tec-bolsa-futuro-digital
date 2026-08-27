export default function Formulario(props){
    function receber(formData){
        let cliente ={}
        if(props.cliente){
            cliente.id=props.cliente.id
        }
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
        <label >Nome: <input name="nome" defaultValue={props.cliente?props.cliente.nome:null} required/></label>
        <br />
        <br />
        <label >E-mail: <input name="email" defaultValue={props.cliente?props.cliente.email:null} type="email" required/></label>
        <br />
        <br />
        <label>
        <input type="radio" name="tipo" defaultChecked={props.cliente?.tipo=="pf"} value="pf"/>
        Pessoa Física
        </label>
        <label>
        <input type="radio" name="tipo" defaultChecked={props.cliente?.tipo=="pj"} value="pj"/>
        Pessoa Jurídica
        </label>
        <br />
        <br />
        <input type="checkbox" defaultChecked={props.cliente?.receber}/><label htmlFor="">Receber e-mail</label>
        <br />
        <br />

        <label htmlFor="">Cidade: 
        <select name="cidade" defaultValue={props.cliente?.cidade}>
            <option value=""></option>
            <option value="poa">Porto Alegre</option>
            <option value="cns">Canoas</option>
            <option value="nh">Novo Hamburgo</option>
            <option value="outras">Outras</option>
        </select>
        </label>
        <br />
        <br />
        <button type='submit'>{props.cliente? "Atualizar":"Cadastrar"}</button>
        <button type='reset'>Limpar</button>
        <button onClick={()=>props.onCancelar()} type="button">Cancelar</button>
    </form>
    </>
}