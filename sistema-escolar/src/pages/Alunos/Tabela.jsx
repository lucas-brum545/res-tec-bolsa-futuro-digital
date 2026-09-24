import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Pagination } from "@mui/material"
import dayjs from 'dayjs'

export default function Tabela(props){

    function mudarPagina(evento, novoValor){
        props.onMudarPagina(novoValor)
    }

    return <>
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
            </TableRow>
        </TableHead>
        <TableBody>
            {props.alunos.map(aluno=><TableRow>
                <TableCell>{aluno.id}</TableCell>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.email}</TableCell>
                <TableCell>{aluno.cpf}</TableCell>
                <TableCell>{dayjs(aluno.dataNascimento).format("DD/MM/YYYY")}</TableCell>
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