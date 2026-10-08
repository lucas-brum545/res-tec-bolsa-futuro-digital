import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from '../../services/api'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Tabela from './Tabela'
import DialogTurma from "./DialogTurma";
import Matriculas from "./Matriculas";

export default function Turmas(){
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [turmas, setTurmas] = useState(null)
    const [exibirCadastroTurma, setExibirCadastroTurma] = useState(false)
    const [turmaParaEditar, setTurmaParaEditar] = useState(null)
    const [disciplinas, setDisciplinas] = useState(null)
    const [turmaIdMatriculas, setTurmaIdMatriculas] = useState(null)

    async function buscarDisciplinas(params){
        let retorno = await api.get("/disciplinas")
        setDisciplinas(retorno.data)
    }

    async function buscarTurmas(){
        let params = {_page:pagina, _per_page:5}
        let retorno = await api.get('/turmas/', {params:params})
        // setTurmas(retorno.data.data)
        let turmas = retorno.data.data; {/* quando para paginacao, retorno.data.data */}
        turmas = turmas.map(async turma=>{
            let retorno = await api.get(`/disciplinas/${turma.disciplinaId}`)
            let disciplina = retorno.data
            turma.disciplinaNome = disciplina.nome; {/* apenas visualmente, nada e alterado no back end */}
            return turma
        })
        
        turmas = await Promise.all(turmas)
        
        setTurmas(turmas)
        setTotalPaginas(retorno.data.pages)
    }

    useEffect(()=>{
        buscarTurmas()
    }, [pagina])

    useEffect(()=>
    {
        buscarDisciplinas()
    },[]) // sem dependencias = carregará somente uma vez

    async function excluirTurma(id) {
        let retorno = await api.delete(`/turmas/${id}`)
        buscarTurmas()
    }

    async function iniciaEdicaoTurma(id){
        let retorno = await api.get(`/turmas/${id}`)
        setTurmaParaEditar(retorno.data)
        setExibirCadastroTurma(true)
    }

    async function enviarTurma(turma){
        if(turma.id){
            // atualizar
            let retorno = await api.put(`/turmas/${turma.id}`, turma)
            setTurmaParaEditar(null)
        }
        else{
            // cadastrar
            let retorno = await api.post("/turmas/", turma)
        }

        setExibirCadastroTurma(false)
        buscarTurmas()
    }

    return <Paper>
        <Typography variant="h3" align="center">
            Gestão de Turmas
        </Typography>
        {exibirCadastroTurma&&
        <DialogTurma
            disciplinas={disciplinas}
            turmaParaEditar={turmaParaEditar}
            onEnviar={enviarTurma}
            onCancelar={()=>{setExibirCadastroTurma(false)
            setTurmaParaEditar(null)
            }
            }
        />}
        
        {turmaIdMatriculas&&<Matriculas
            turmaId={turmaIdMatriculas}
            onFechar={()=>setTurmaIdMatriculas(null)}
        />}

        <Button onClick={()=>setExibirCadastroTurma(true)}>Cadastrar nova turma</Button>
        {turmas===null?
        <LinearProgress>
        </LinearProgress>:
        <Tabela pagina={pagina}
        totalPaginas={totalPaginas}
        turmas={turmas}
        onEnviar={enviarTurma}
        onMudarPagina={pagina=>setPagina(pagina)}
        onEditarTurma={iniciaEdicaoTurma}
        onExcluirTurma={excluirTurma}
        onEditarMatriculas={(id)=>setTurmaIdMatriculas(id)}/>}
    </Paper>
}