import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Pagination, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";


export default function Tabela(props){
    console.log(props)

    const [disciplinaParaExcluir, setDisciplinaParaExcluir] = useState(null)

    function mudarPagina(evento, novoValor){
        props.onMudarPagina(novoValor)
    }

    function excluir(){
        props.onExcluir(disciplinaParaExcluir.id)
        setDisciplinaParaExcluir(null)
    }


    return(
        <>
        {disciplinaParaExcluir && <Dialog open>
                <DialogTitle>
                    Deseja Excluir o Aluno?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {disciplinaParaExcluir.id} - {disciplinaParaExcluir.nome}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setDisciplinaParaExcluir(null)}>Cancelar</Button>
                    <Button color="warning" onClick={excluir}>Confirmar</Button>
                </DialogActions>
            </Dialog>}
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        ID
                    </TableCell>
                    <TableCell>
                        Nome da Disciplina
                    </TableCell>
                    <TableCell>
                        Carga Horária
                    </TableCell>
                    <TableCell>
                        Ações
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.disciplinas.map(disciplina=><TableRow>
                    <TableCell>{disciplina.id}</TableCell>
                    <TableCell>{disciplina.nome}</TableCell>
                    <TableCell>{disciplina.cargaHoraria}</TableCell>
                    <TableCell>
                        <IconButton onClick={()=>setDisciplinaParaExcluir(disciplina)}> {/* ctrl + space para importar o elemento depois de digitar */}
                            <DeleteOutlineOutlinedIcon color="warning"/>
                        </IconButton>
                        <IconButton onClick={()=>props.onEditar(disciplina.id)}>
                            <EditOutlinedIcon color="info"/>
                        </IconButton>
                    </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>
                        <Pagination 
                        count={props.totalPaginas}
                        page={props.pagina}
                        onChange={mudarPagina}></Pagination>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        </>
    )
}