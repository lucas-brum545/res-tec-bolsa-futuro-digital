import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, TextField } from "@mui/material";
import api from '../../services/api'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from "react";
import { useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { Alert } from "@mui/material";

function MatricularAluno(props){
    const [pesquisarNome, setPesquisarNome] = useState('')
    const [alunos, setAlunos] = useState([])
    const [alunoSelecionado, setAlunoSelecionado] = useState(null)
    const [mensagem, setMensagem] = useState('')
    
    async function pesquisarAluno(){
        setAlunoSelecionado(null)
        let retorno = await api.get("/alunos", {
            params:{
                "nome:contains":pesquisarNome
            }
        })
        setAlunos(retorno.data)
    }

    useEffect(()=>{
        pesquisarAluno()
    }, [pesquisarNome])

    async function matricular(){
        let novaMatricula = {
            turmaId: props.turmaId,
            alunoId: alunoSelecionado.id
        }

        let matriculaExiste = await api.get("/matriculas", {
            params:{
                "turmaId":novaMatricula.turmaId,
                "alunoId":novaMatricula.alunoId
            }
        })

        if(matriculaExiste.data.length == 0){
            let retorno = await api.post("/matriculas", novaMatricula)
            props.onFechar()
        }
        else{
            setMensagem('Aluno já está matriculado na turma')
        }
        
        
    }

    return <>
        <Dialog open fullWidth>
            <DialogTitle>
                Matricular Novo Aluno
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{display: "flex", mt:4, height:"70vh"}}>
                    <TextField
                    label="Nome"
                    placeholder="Pesquisar aluno"
                    value={pesquisarNome}
                    onChange={(evento)=>setPesquisarNome(evento.target.value)}></TextField>
                    <List sx={{flex: "1", overflow:"scroll"}}>
                        {alunos.map(aluno=>
                            <ListItemButton selected={aluno.id==alunoSelecionado?.id}  onClick={() => setAlunoSelecionado(aluno)} key={aluno.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon></PersonIcon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={aluno.nome}
                                    secondary={aluno.email}
                                >
                                </ListItemText>
                            </ListItemButton>
                        )}
                    </List>
                    {mensagem && (<Alert severity="error">{mensagem}</Alert>)}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onFechar} color="warning">Cancelar</Button>
                <Button disabled={!alunoSelecionado} onClick={matricular} color="success">Matricular</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default function Matriculas(props){
    const [matriculas, setMatriculas] = useState([])
    const [matriculaExcluir, setMatriculaExcluir] = useState(null)
    const [exibirMatricularAluno, setExibirMatricularAluno] = useState(false)

    async function buscarAlunos(){
        let retorno = await api.get(`/matriculas?turmaId=${props.turmaId}`)
        let matriculas = retorno.data
        for(let i = 0; i < matriculas.length;i++){
            let retornoAluno = await api.get(`/alunos/${matriculas[i].alunoId}`)
            let aluno = retornoAluno.data
            matriculas[i].aluno=aluno
        }
        setMatriculas(matriculas)
    }


    useEffect(
        ()=>{
            buscarAlunos()
        }, []
    )

    // nao precisa de parametro pois utiliza o estado
    async function excluirMatricula(){
        await api.delete(`/matriculas/${matriculaExcluir.id}`)
        setMatriculaExcluir(null)
        buscarAlunos()
    }

    return(
        <Dialog open fullWidth>
            {exibirMatricularAluno && <MatricularAluno
            onFechar={()=>{
                setExibirMatricularAluno(false)
                buscarAlunos()}}
            turmaId={props.turmaId}
            />}

            {matriculaExcluir &&
            <Dialog open>
                <DialogTitle>Excluir Aluno</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                            Deseja excluir o aluno {matriculaExcluir.aluno.nome}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setMatriculaExcluir(null)}>Cancelar</Button>
                    <Button color="warning" onClick={excluirMatricula}>Confirmar</Button>
                </DialogActions>
            </Dialog>}
            <DialogTitle>Alunos da Turma: {props.turmaId}</DialogTitle>
                <DialogContent>
                    <List>
                        {matriculas.map(matricula=>
                        <ListItem
                        secondaryAction={
                            <IconButton onClick={()=>setMatriculaExcluir(matricula)} edge="end" aria-label="delete">
                                <DeleteOutlined color="warning"/>
                            </IconButton>
                        }>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={matricula.aluno.nome} secondary={matricula.aluno.email}/>   
                        </ListItem>)}
                    </List>
                </DialogContent>
            <DialogActions sx={{display:"flex", justifyContent:"space-between"}}>
                <Button color="success" onClick={()=>setExibirMatricularAluno(true)}>Matricular Aluno</Button>
                <Button onClick={props.onFechar}>Fechar</Button>
            </DialogActions>
        </Dialog>
    )
}