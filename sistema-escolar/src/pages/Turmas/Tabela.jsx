import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Pagination, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useState } from "react";

export default function Tabela(props){
    const [turmaParaExcluir, setTurmaParaExcluir] = useState(null)



    return (
        <>
        {turmaParaExcluir&&<Dialog open>
                <DialogTitle>Excluir turma?</DialogTitle>
                <DialogContent>
                    Deseja excluir a turma: {turmaParaExcluir.id} - {turmaParaExcluir.nome} ?
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setTurmaParaExcluir(null)}>Cancelar</Button>
                    <Button color="warning" onClick={()=>{
                        props.onExcluirTurma(turmaParaExcluir.id);
                        setTurmaParaExcluir(null);}}>Confirmar</Button>
                </DialogActions>
            </Dialog>}
            
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Ano/Semestre</TableCell>
                    <TableCell>Ações</TableCell>   
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.turmas.map(turma=><TableRow>
                        <TableCell>{turma.id}</TableCell>
                        <TableCell>{turma.nome}</TableCell>
                        <TableCell>{turma.ano}/{turma.semestre}</TableCell>
                        <TableCell sx={{whiteSpace:"noWrap"}}>
                            <IconButton onClick={()=>setTurmaParaExcluir(turma)}>
                                <DeleteOutlineOutlinedIcon color="error"></DeleteOutlineOutlinedIcon>
                            </IconButton>
                            <IconButton onClick={()=>props.onEditarTurma(turma.id)}>
                                <EditOutlinedIcon color="primary"/>
                            </IconButton>
                            <IconButton onClick={()=>props.onEditarMatriculas(turma.id)}>
                                <GroupOutlinedIcon color="secondary"/>
                            </IconButton>
                        </TableCell>
                    </TableRow>)
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>
                        <Pagination
                            page={props.pagina}
                            count={props.totalPaginas}
                            onChange={(evento, novaPagina)=>props.onMudarPagina(novaPagina)}
                        />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        </>
    )
}