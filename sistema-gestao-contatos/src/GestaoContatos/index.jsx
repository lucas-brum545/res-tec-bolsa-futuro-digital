import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Tabela from '../Tabela/Tabela.jsx';
import Form from '../Form/Form.jsx'
export default function GestaoContatos() {
  const [contatos, setContatos] = useState([]);
  async function carregarContatos() {
    let retorno = await axios.get('http://localhost:3000/contatos');
    console.log(retorno);
    let contatoServidor = retorno.data;
    setContatos(contatoServidor);
  }


  useEffect(() => {
    carregarContatos();
  }, []);



  return (
    <>
      <h1>Sistema de Contatos</h1>
      <Form/>
      <Tabela dados ={contatos}/>
    </>
  );
}