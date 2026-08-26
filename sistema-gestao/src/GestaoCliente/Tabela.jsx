export default function Tabela(props){


    return <>
    <h2>Dados cadastrados</h2>
    <table border={1}>
        <thead>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Tipo</th>
                <th>Receber e-mail</th>
                <th>Cidade</th>
            </tr>
        </thead>
        <tbody>
            {props.clientes.map((cliente)=><tr>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.tipo}</td>
                <td>{cliente.receber}</td>
                <td>{cliente.cidade}</td>
            </tr>)}
        </tbody>
    </table>
    </>

}