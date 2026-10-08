import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import api from '../../services/api'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from "react";
import { useState } from "react";

export default function Matriculas(props){
    const [matriculas, setMatriculas] = useState([])

    async function buscarAlunos(){
        let retorno = await api.get(`/matriculas?turmaId=${props.turmaId}`)
        let matriculas = retorno.data
        for(let i = 0; i < matriculas.length;i++){
            let retornoAluno = await api.get(`/alunos/${matriculas[i].alunoId}`)
            let aluno = retornoAluno.data
            matriculas[i].aluno=aluno
            console.log(matriculas)
        }
        setMatriculas(matriculas)
    }


    useEffect(
        ()=>{
            buscarAlunos()
        }, []
    )

    return(
        <Dialog open fullWidth>
            <DialogTitle>Alunos da Turma: {props.turmaId}</DialogTitle>
                <DialogContent>
                    <List>
                        {matriculas.map(matricula=>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={matricula.aluno.nome} secondary={matricula.aluno.email}/>   
                        </ListItem>)}
                    </List>
                </DialogContent>
            <DialogActions>
                <Button onClick={props.onFechar}>Fechar</Button>
            </DialogActions>
        </Dialog>
    )
}