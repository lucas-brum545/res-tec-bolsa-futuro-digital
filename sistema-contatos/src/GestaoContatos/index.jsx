import axios from "axios";
import { useState, useEffect } from "react";
import Tabela from "./Tabela";
import Formulario from "./Formulario";

export default function GestaoContatos(props) {
    const [contatos, setContatos] = useState([]);
    async function carregarContatos() {
        let retorno = await axios.get("http://localhost:3000/contatos");
        console.log(retorno);
        let contatosServidor = retorno.data;
        setContatos(contatosServidor);
    }
    useEffect(function(){
        carregarContatos();
    }, [] ); 
    return <>
        <Formulario />
        <Tabela  contatos={contatos} />     
    </>
}