import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { Button, Stack } from '@mui/material';
import Tabela from './Tabela';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import DialogProdutos from './DialogProdutos';

export default function Produtos(){
    const [exibirDialog, setExibirDialog] = useState(false)
    const [produtoParaEditar, setProdutoParaEditar] = useState(null)
    const [produtos, setProdutos] = useState([])

    async function buscarProdutos() {
        try {
            let retorno = await api.get('/produtos');
            let data = retorno.data;
            setProdutos(data);
        }
        catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    async function enviar(produto) {
        try {
            if (produtoParaEditar) {
                await api.put(`/produtos/${produtoParaEditar.id}`, produto);
                setProdutoParaEditar(null)
            }
            else {
                await api.post('/produtos', produto);
            }
            setExibirDialog(false);
            setProdutoParaEditar(null);
            buscarProdutos();
        }
        catch (error) {
            console.error('Erro ao salvar produto:', error);
        }
    }

    async function deletar(produto){
        try {
            await api.delete(`/produtos/${produto.id}`);
            buscarProdutos();
        }
        catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    }

    return (
        <>
        {exibirDialog && (<DialogProdutos produto={produtoParaEditar}
        onEnviar={enviar}
        onFechar={()=> setExibirDialog(false)}/>)}
        <h1><StorefrontRoundedIcon sx={{paddingRight: '7px'}}/>Gerenciamento de produtos</h1>
        <Stack direction="row" spacing={2} sx={{marginBottom: '10px'}}>
            <Button variant='contained' color='primary' onClick={()=>setExibirDialog(true)}>Adicionar Novo Produto</Button>
        </Stack>
        <Tabela
            produtos={produtos}
            onEditar={enviar}
            onDeletar={deletar}
        />
        </>
    )
}