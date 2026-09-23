import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Tabela from '../Tabela/Tabela.jsx';
import Form from '../Form/Form.jsx'

export default function GestaoContatos() {
  const [contatos, setContatos] = useState([]);
  const [exibirCadastro, setExibirCadastro] = useState(false)
  const [exibirAlteracao, setExibirAlteracao] = useState(false)

  async function carregarContatos() {
    let retorno = await axios.get('http://localhost:3000/contatos');
    console.log(retorno);
    let contatoServidor = retorno.data;
    setContatos(contatoServidor);
  }

  useEffect(() => {
    carregarContatos();
  }, []);

  function enviar(contato){
    let retorno = axios.post("http://localhost:3000/contatos", contato)
    carregarContatos()
    setExibirCadastro(false)
  }

  async function excluir(id){
    let retorno = await axios.delete("http://localhost:3000/contatos/"+id)
    carregarContatos()
  }

  // funcao que altera o contato armazenado em JSON baseando-se no id
  function iniciarEdicao(id){
    let retorno = axios.get("http://localhost:3000/contatos/"+id
    
    
    
  }

  return (
    <>
      <h1>Sistema de Contatos</h1>
      {exibirCadastro?<dialog open>
        <Form onEnviar={enviar}
        onCancelar={() => setExibirCadastro(false)}/>
      </dialog>:
      <>
      <button onClick={() => setExibirCadastro(true)}>Cadastrar Novo Contato</button>
      <br />
      </>}
      <br />
      <Tabela
      dados={contatos}
      onExcluir={excluir}
      onAlterar={iniciarEdicao}
      />
    </>
  );
}