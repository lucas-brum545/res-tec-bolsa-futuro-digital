export default function Tabela(props){
    return <>
    <h2>Dados cadastrados</h2>
    <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Tipo</th>
                <th>Receber e-mail</th>
                <th>Cidade</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            {props.clientes.map((cliente)=><tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.tipo=="pf"?"Pessoa Física":"Pessoa Jurídica"}</td>
                {/* problema: true ou false nao sao renderizados pelo react */}
                <td>{cliente.receber?"sim":"não"}</td> 
                <td>{cliente.cidade}</td>
                <td><button onClick={()=>props.onEditar(cliente)}>✏️</button>
                <button onClick={()=>{
                    if(window.confirm("Deseja excluir o item de id: " + cliente.id + "?")){
                        props.onExcluir(cliente.id)
                    }
                }}>🗑️</button></td>
            </tr>)}
        </tbody>
    </table>
    </>

}