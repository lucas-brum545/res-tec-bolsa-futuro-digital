import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Pagination, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";
import DialogClientes from "./DialogClientes";

export default function Tabela(props) {
    const [clienteParaEditar, setClienteParaEditar] = useState(null);
    const [clienteParaDeletar, setClienteParaDeletar] = useState(null);
    const listaDados = Array.isArray(props.clientes) ? props.clientes : [];

    return (<>
    {clienteParaDeletar && (<DialogClientes/>)}
    
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.clientes.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.cpf}</TableCell>
                    <TableCell>
                        <IconButton onClick={() => props.onEditar(row)}>
                            <EditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => props.onDeletar(row)}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </>)

}