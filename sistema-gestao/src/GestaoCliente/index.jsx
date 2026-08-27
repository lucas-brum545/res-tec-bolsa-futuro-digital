import Formulario from "./Formulario"
import Tabela from "./Tabela"
import { useState } from "react"

let MaxID = 3
const BaseInicial = [
    {
        id:1,
        nome:"Carlos",
        email:"carlos@exemplo.com",
        tipo:"pf",
        receber: true,
        cidade:"poa"
    },
    {
        id:2,
        nome:"Exemplo S.A.",
        email:"exemplo@exemplo.com",
        tipo:"pj",
        receber: false,
        cidade:"nh"
    }
]

function simularCadastroBackEnd(cliente){
    cliente.id = MaxID
    MaxID++

    return cliente
}

function simularAtualizarBackEnd(cliente){
    return cliente
}

function simularExcluirBackEnd(id){
    
}
export default function GestaoCliente(){
    const [clientes, setClientes] = useState(BaseInicial)
    const [exibirFormulario, setExibirFormulario] = useState(false)
    const [clienteParaEditar, setClienteParaEditar] = useState(null)

    function receber(cliente){
        console.log(cliente)
        if(cliente.id){
            // atualizar
            let clienteServidor = simularAtualizarBackEnd(cliente)
            let novosClientes = clientes.map(function(clienteNaLista){
                if(cliente.id == clienteNaLista.id){
                    return clienteServidor
                }
                else{
                    return clienteNaLista
                }
            })
            setClientes(novosClientes)
            setClienteParaEditar(null)
        }
        else{
            // cadastrar
            let clienteServidor = simularCadastroBackEnd(cliente)
            let novosClientes = [...clientes,clienteServidor]
            setClientes(novosClientes)
        }
        
        setExibirFormulario(false)
    }

    function iniciarEdicao(cliente){
        setExibirFormulario(true)
        setClienteParaEditar(cliente)
    }

    function deletar(id){
        simularExcluirBackEnd(id)
        let novosClientes = clientes.filter(function(clienteNaLista){
            if(clienteNaLista.id==id){
                return false
            }
            else{
                return true
            }
        })
        setClientes(novosClientes)
    }

    return <>
    <h1>Gestão de Clientes</h1>
    {exibirFormulario?
    <Formulario
    key={clienteParaEditar?.id}
    onEnviar={receber}
    cliente={clienteParaEditar}
    onCancelar={()=>{setExibirFormulario(false)
        setClienteParaEditar(null)
    }}/>:<button onClick={()=>setExibirFormulario(true)}>Cadastrar Novo Cliente</button>}
    <br />
    <br />
    <Tabela clientes={clientes} onEditar={iniciarEdicao} onExcluir={deletar}/>
    </>
}