import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import Tabela from "./Tabela";
import DialogClientes from "../Clientes/DialogClientes";
import api from "../../services/api";

export default function Clientes(){
    const [clientes, setClientes] = useState([]);
    const [clienteParaEditar, setClienteParaEditar] = useState(null);
    const [exibirDialog, setExibirDialog] = useState(false);

    async function buscarClientes() {
        try {
            let retorno = await api.get('/clientes');
            let data = retorno.data;
            setClientes(data);
        }
        catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    }

    useEffect(() => {
        buscarClientes();
    }, []);

    async function enviar(cliente) {
        try {
            if (clienteParaEditar) {
                await api.put(`/clientes/${clienteParaEditar.id}`, cliente);
                setClienteParaEditar(null)
            }
            else {
                await api.post('/clientes', cliente);
            }
            setExibirDialog(false);
            setClienteParaEditar(null);
            buscarClientes();
        }
        catch (error) {
            console.error('Erro ao salvar cliente:', error);
        }
    }

    async function deletar(cliente) {
        try {
            await api.delete(`/clientes/${cliente.id}`);
            buscarClientes();
        }
        catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    }


    return (
        <>
        {exibirDialog && (<DialogClientes cliente={clienteParaEditar}
        onEnviar={enviar}
        onFechar={() => setExibirDialog(false)} />)}
        <h1><GroupsRoundedIcon sx={{paddingRight: '7px'}}/>Gerenciamento de clientes</h1>
        <Stack direction="row" spacing={2} sx={{marginBottom: '10px'}}>
            <Button variant="contained" color="primary" onClick={() => setExibirDialog(true)}>Adicionar Novo Cliente</Button>
        </Stack>
        <Tabela clientes={clientes} onEditar={enviar} onDeletar={deletar}/>
        </>
    )
}