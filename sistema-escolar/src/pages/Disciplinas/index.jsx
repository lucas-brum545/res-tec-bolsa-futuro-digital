import { Button, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import api from '../../services/api'
import Tabela from "./Tabela";
import DialogDisciplinas from "./DialogDisciplinas"
import { useState, useEffect } from "react";

export default function Disciplinas(){
    const [disciplinas, setDisciplinas] = useState([])
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [pagina, setPagina] = useState(1)
    const [exibirDialogDisciplina, setExibirDialogDisciplina] = useState(false)
    const [disciplinaParaEditar, setDisciplinaParaEditar] = useState(null)
    const [textoPesquisa, setTextoPesquisa] = useState("")

    async function buscarDisciplinas(){
        let params = {
            _page:pagina,
            _per_page:10
        }

        if(textoPesquisa){
            params["nome:contains"]=textoPesquisa
        }

        let retorno = await api.get("/disciplinas/", {params: params})
        let paginaEDisciplinas = retorno.data
        let disciplinasBanco = paginaEDisciplinas.data
        let paginas = paginaEDisciplinas.pages
        setTotalPaginas(paginas)
        setDisciplinas(disciplinasBanco)
    }

    useEffect(()=>{
            buscarDisciplinas();
        }, [pagina, textoPesquisa])

    function mudarPagina(novaPagina){
        setPagina(novaPagina)
    }

    async function enviar(disciplina){ {/* interacao com banco de dados sempre ASSINCRONA, por isso o async */}
        if(disciplina.id){
            // atualizar
            let retorno = await api.put(`/disciplinas/${id}`, disciplina)
            setDisciplinaParaEditar(null)
        }
        else{
            // cadastrar
            let retorno = await api.post(`/disciplinas/`, disciplina)
        }

        let retorno = await api.post("/disciplinas/", disciplina)
        setExibirDialogDisciplina(false)
        buscarDisciplinas() // atualiza os dados
    }

    async function excluir(id){
        let retorno = await api.delete(`/disciplinas/${id}`)
        buscarDisciplinas()
    }

    async function iniciarEdicao(id){
        let retorno = await api.get(`/disciplinas/${id}`)
        let disciplinaBackEnd = retorno.data
        setDisciplinaParaEditar(disciplinaBackEnd)
        setExibirDialogDisciplina(true)
    }

    function enviarPesquisa(formData){
        setTextoPesquisa(formData.get("pesquisa"))
    }


    return <>
        <Paper sx={{pl:2, pt:1, mt:1}}>
            <Typography variant="h3" align="center">
                Gestão de Disciplinas
            </Typography>
            {exibirDialogDisciplina
                        &&<DialogDisciplinas
                        onEnviar={enviar}
                        disciplinaParaEditar={disciplinaParaEditar}
                        onCancelar={()=>{setExibirDialogDisciplina(false)
                            setDisciplinaParaEditar(null)}}
                    />}
            <Stack direction={"row"} sx={{justifyContent:"space-between", pr:4}}>
                <Button onClick={()=>setExibirDialogDisciplina(true)}>
                    Cadastrar nova disciplina
                </Button>
                <form action={enviarPesquisa}>
                    <TextField sx={{ width: '400px' }}
                    label="Pesquisar"
                    name="pesquisa"
                    slotProps={
                        {
                            input: {
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton type='submit'>
                                        <SearchIcon></SearchIcon>
                                    </IconButton>
                                </InputAdornment>
                            }
                        }
                    }
                ></TextField>
                </form>
            </Stack>
            <Tabela disciplinas={disciplinas}
                onMudarPagina={mudarPagina}
                onExcluir={excluir}
                onEditar={iniciarEdicao}
                pagina={pagina}
                totalPaginas={totalPaginas}/>
        </Paper>
    </>
}