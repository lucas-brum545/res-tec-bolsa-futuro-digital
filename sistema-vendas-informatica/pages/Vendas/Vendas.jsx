import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { useState, useEffect } from "react";
import api from "../../services/api";
import Tabela from "./Tabela";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function Vendas(){
    const [vendas, setVendas] = useState([]);
    const [exibirDialog, setExibirDialog] = useState(false);
    const [vendaParaEditar, setVendaParaEditar] = useState(null);

    async function buscarVendas() {
        try {
            const retorno = await api.get('/vendas');
            const data = retorno.data;
            setVendas(data);
        } catch (error) {
            console.error('Erro ao buscar vendas:', error);
        }
    }

    useEffect(() => {
        buscarVendas();
    }, []);

    async function enviar(venda) {
        try {
            if (vendaParaEditar) {
                await api.put(`/vendas/${vendaParaEditar.id}`, venda);
            }
            else {
                await api.post('/vendas', venda);
            }
            setExibirDialog(false);
            setVendaParaEditar(null);
            buscarVendas();
        } catch (error) {
            console.error('Erro ao salvar venda:', error);
        }
    }

    async function deletar(venda) {
        try {
            await api.delete(`/vendas/${venda.id}`);
            buscarVendas();
        } catch (error) {
            console.error('Erro ao deletar venda:', error);
        }
    }

    async function editar(venda) {
        let retorno = await api.get(`/vendas/${venda.id}`);
        setVendaParaEditar(retorno.data);
        setExibirDialog(true);
    }
    
    return (
        <h1><StorefrontRoundedIcon sx={{paddingRight: '7px'}}/>Gerenciamento de vendas</h1>

    )
}