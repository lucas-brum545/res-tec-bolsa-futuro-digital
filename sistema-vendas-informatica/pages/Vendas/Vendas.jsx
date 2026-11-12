import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { useState, useEffect } from "react";
import DialogVendas from './DialogVendas';
import api from "../../services/api";
import Tabela from "./Tabela";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";

export default function Vendas(){
    const [vendas, setVendas] = useState([]);
    const [exibirDialog, setExibirDialog] = useState(false);
    const [vendaParaEditar, setVendaParaEditar] = useState(null);

    async function buscarVendas() {
        try {
            const retorno = await api.get('/vendas');
            let vendas = retorno.data;
            vendas = vendas.map(async venda=>{
                let retorno = await api.get(`/clientes/${venda.idCliente}`)
                let cliente = retorno.data
                venda.nomeCliente = cliente.nome
                // para cada id produto de venda.produtos resgatar seu nome
                venda.compras = []
                for(let i=0; i<venda.produtos.length;i++){
                    retorno = await api.get(`/produtos/${venda.produtos[i].idProduto}`)
                    let produto = retorno.data
                    let compra = {
                            nomeProduto: produto.nome,
                            quantidadeCompra: venda.produtos[i].quantidade
                    }
                    venda.compras.push(compra)
                    
                }
            return venda
            })
            console.log("vendas")
            console.log(vendas)
            vendas = await Promise.all(vendas)
            console.log(vendas)
            setVendas(vendas);
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
        <>
        {exibirDialog && (<DialogVendas
            venda={vendaParaEditar}
            onEnviar={enviar}
            onFechar={()=>setExibirDialog(false)}
        />
        )}
        <h1><StorefrontRoundedIcon sx={{paddingRight: '7px'}}/>Gerenciamento de vendas</h1>
        <Stack direction="row" spacing={2} sx={{marginBottom: '10px'}}>
            <Button variant='contained' color='primary' onClick={()=>setExibirDialog(true)}>Efetuar Nova Venda</Button>
        </Stack>
        <Tabela vendas={vendas} onEditar={enviar} onDeletar={deletar}/>
        </>
    )
}