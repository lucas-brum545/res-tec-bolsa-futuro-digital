import { useState } from "react";
import './Tabela.css'

export default function Tabela(props) {
  const [contatoExcluir, setContatoExcluir] = useState(null)

  function solicitarExclusao(contato){
    setContatoExcluir(contato)
  }

  function confirmarExclusao(){
    props.onExcluir(contatoExcluir.id)
    setContatoExcluir(null)
  }

  return (
    <>
    {contatoExcluir?<dialog open style={{position: "fixed"}}>
      <h2>Deseja excluir o item?</h2>
      <div>ID: {contatoExcluir.id}</div>
      <div>Nome: {contatoExcluir.nome}</div>
      <button onClick={confirmarExclusao}>Confirmar</button>
      <button onClick={()=>setContatoExcluir(null)}>Cancelar</button>
    </dialog>:""}
    <table className="tabelaContato" border={1}>
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
              <td>{contato.id}</td>
              <td>{contato.nome}</td>
              <td>{contato.email}</td>
              <td>
                <ul>
                  {contato.telefones?.map(telefone=><li>{telefone}</li>)}
                </ul>
              </td>
              {/* <td > style={whiteSpace:noWrap} */}
              <td>
                <button onClick={()=>solicitarExclusao(contato)}>🗑️</button>
                <button onClick={()=>props.onEditar(contato.id)}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}