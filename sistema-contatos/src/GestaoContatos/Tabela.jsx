export default function Tabela(props) {
    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefones</th>
                    <th>Ação</th>  
                </tr>
            </thead>
            <tbody>
                {props.contatos.map(contato=><tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                    <td>
                        <ul>
                            {contato.telefones?.map(telefone=><li>{telefone}</li>)}
                        </ul>
                        </td>
                </tr>)}
            </tbody>
        </table>
    </>
}