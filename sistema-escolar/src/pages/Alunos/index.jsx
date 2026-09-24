// use effect busca os alunos apenas uma vez
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import api from '../../services/api'
import Tabela from './Tabela'
import { Paper } from '@mui/material'

export default function Alunos(){
    const [alunos, setAlunos] = useState([])
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [pagina, setPagina] = useState(1)

    async function buscarAlunos(){
        let retorno = await api.get("/alunos/?_page=" + pagina + "&_per_page=10")
        let paginaEAlunos = retorno.data
        let alunosBanco = paginaEAlunos.data
        let paginas = paginaEAlunos.pages
        setTotalPaginas(paginas)
        setAlunos(alunosBanco)
    }

    useEffect(
        ()=>{
            buscarAlunos();
        }, [pagina])

    function mudarPagina(novaPagina){
        setPagina(novaPagina)
    }

    return <Paper sx={{pl:2, pt:1, mt:1}}>
    <Typography variant='h3' align='center'>
        Gestão de Alunos
    </Typography>
    <Tabela alunos={alunos}
    onMudarPagina={mudarPagina}
    pagina={pagina}
    totalPaginas={totalPaginas}></Tabela>
    </Paper>
}