import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Pagination, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";

export default function Tabela({data, columns, onEdit, onDelete}) {
    const [produtoParaEditar, setProdutoParaEditar] = useState(null);
    const [produtoParaDeletar, setProdutoParaDeletar] = useState(null);

    return(
        <>
        {produtoParaDeletar && (
            <DialogVendas/>
        )}
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Estoque</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.nome}</TableCell>
                        <TableCell>{row.valor}</TableCell>
                        <TableCell>{row.estoque}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => setProdutoParaEditar(row)}>
                                <EditOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={() => setProdutoParaDeletar(row)}>
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}