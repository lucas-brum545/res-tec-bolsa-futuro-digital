export default function Tabela(props) {
  return (
    <>
    <table border={1}>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
          {props.dados.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.nome}</td>
              <td>{contato.email}</td>
              <td>
                <ul>
                  {contato.telefones?.map(telefone=><li>{telefone}</li>)}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}