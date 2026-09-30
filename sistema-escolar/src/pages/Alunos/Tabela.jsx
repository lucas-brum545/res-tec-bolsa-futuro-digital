import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Pagination, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import dayjs from 'dayjs'
import { useState } from "react";

export default function Tabela(props){
    const [alunoParaExcluir, setAlunoParaExcluir] = useState(null)

    function mudarPagina(evento, novoValor){
        props.onMudarPagina(novoValor)
    }

    function excluir(){
        props.onExcluir(alunoParaExcluir.id)
        setAlunoParaExcluir(null)
    }

    return <>
    {/* aparece a tela de exclusao somente se houver um aluno a ser excluido -> usuario clicou na lixeira do aluno a ser excluido */}
    {alunoParaExcluir && <Dialog open>
        <DialogTitle>
            Deseja Excluir o Aluno?
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {alunoParaExcluir.id} - {alunoParaExcluir.nome}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setAlunoParaExcluir(null)}>Cancelar</Button>
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
                        Nome
                    </TableCell>
                    <TableCell>
                        E-mail
                    </TableCell>
                    <TableCell>
                        CPF
                    </TableCell>
                    <TableCell>
                        Data de Nascimento
                    </TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.alunos.map(aluno=><TableRow>
                    <TableCell>{aluno.id}</TableCell>
                    <TableCell>{aluno.nome}</TableCell>
                    <TableCell>{aluno.email}</TableCell>
                    <TableCell>{aluno.cpf}</TableCell>
                    <TableCell>{dayjs(aluno.dataNascimento).format("DD/MM/YYYY")}</TableCell>
                    <TableCell>
                        <IconButton onClick={()=>setAlunoParaExcluir(aluno)}> {/* ctrl + space para importar o elemento depois de digitar */}
                            <DeleteOutlineOutlinedIcon color="warning"/>
                        </IconButton>
                        <IconButton onClick={()=>props.onEditar(aluno.id)}>
                            <EditOutlinedIcon color="info"/>
                        </IconButton>
                    </TableCell>
                </TableRow>)
                }
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
}