// use effect busca os alunos apenas uma vez
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import api from '../../services/api'
import Tabela from './Tabela'
import DialogAlunos from './DialogAlunos'
import { Paper, Button } from '@mui/material'

export default function Alunos(){
    const [alunos, setAlunos] = useState([])
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [pagina, setPagina] = useState(1)
    const [exibirDialogAluno, setExibirDialogAluno] = useState(false)
    const [alunoParaEditar, setAlunoParaEditar] = useState(null)



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

    async function enviar(aluno){ {/* interacao com banco de dados sempre ASSINCRONA, por isso o async */}
        if(aluno.id){
            // atualizar
            let retorno = await api.put(`/alunos/${id}`, aluno)
            setAlunoParaEditar(null)
        }
        else{
            // cadastrar
            let retorno = await api.post(`/alunos/`, aluno)
        }

        let retorno = await api.post("/alunos/", aluno)
        setExibirDialogAluno(false)
        buscarAlunos() // atualiza os dados
    }

    async function excluir(id){
        let retorno = await api.delete(`/alunos/${id}`)
        buscarAlunos()
    }

    async function iniciarEdicao(id){
        let retorno = await api.get(`/alunos/${id}`)
        let alunoBackEnd = retorno.data
        // transformar o aluno em um estado
        setAlunoParaEditar(alunoBackEnd)
        setExibirDialogAluno(true)
    }

    return <Paper sx={{pl:2, pt:1, mt:1}}>
        <Typography variant='h3' align='center'>
            Gestão de Alunos
        </Typography>
        {/* dialog modal -> suspende a tela de fundo focando apenas no dialog */}
        {/* logica do and para renderizacao condicional, so aparece quando a primeira é verdadeira */}
        {exibirDialogAluno
            &&<DialogAlunos
            onEnviar={enviar}
            alunoParaEditar={alunoParaEditar}
            onCancelar={()=>{setExibirDialogAluno(false)
                setAlunoParaEditar(null)}}
        />}
        <Button onClick={()=>setExibirDialogAluno(true)}>
            Cadastrar novo aluno
        </Button>
        <Tabela alunos={alunos}
        onMudarPagina={mudarPagina}
        onExcluir={excluir}
        onEditar={iniciarEdicao}
        pagina={pagina}
        totalPaginas={totalPaginas}></Tabela>
    </Paper>
}