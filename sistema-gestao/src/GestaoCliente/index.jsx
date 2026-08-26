import Formulario from "./Formulario"
import Tabela from "./Tabela"
import { useState } from "react"
let MaxID = 1

function simularCadastroBackEnd(cliente){
    cliente.id = MaxID
    MaxID++

    return cliente
}

export default function GestaoCliente(){
    const [clientes, setClientes] = useState([])

    function receber(cliente){
        let clienteServidor = simularCadastroBackEnd(cliente)
        let novosClientes = [...clientes,clienteServidor]
        setClientes(novosClientes)
    }

    return <>
    <h1>Gestão de Clientes</h1>
    <Formulario onEnviar={receber}/>
    <br />
    <br />
    <Tabela clientes={clientes}/>
    </>
}