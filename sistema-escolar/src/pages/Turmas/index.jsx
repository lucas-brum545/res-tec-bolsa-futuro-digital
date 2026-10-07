import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from '../../services/api'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Tabela from './Tabela'
import DialogTurma from "./DialogTurma";

export default function Turmas(){
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [turmas, setTurmas] = useState(null)
    const [exibirCadastroTurma, setExibirCadastroTurma] = useState(false)

    async function buscarTurmas(){
        let params = {_page:pagina, _per_page:5}
        let retorno = await api.get('/turmas/', {params:params})
        // setTurmas(retorno.data.data)
        let turmas = retorno.data.data;
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

    async function excluirTurma(id) {
        let retorno = await api.delete(`/turmas/${id}`)
        buscarTurmas()
    }

    return <Paper>
        <Typography variant="h3" align="center">
            Gestão de Turmas
        </Typography>
        {exibirCadastroTurma&&
        <DialogTurma
            onCancelar={()=>setExibirCadastroTurma(false)}
        />}
        <Button onClick={()=>setExibirCadastroTurma(true)}>Cadastrar nova turma</Button>
        {turmas===null?
        <LinearProgress>
        </LinearProgress>:
        <Tabela pagina={pagina}
        totalPaginas={totalPaginas}
        turmas={turmas}
        onMudarPagina={pagina=>setPagina(pagina)}
        onExcluirTurma={excluirTurma}/>}
    </Paper>
}