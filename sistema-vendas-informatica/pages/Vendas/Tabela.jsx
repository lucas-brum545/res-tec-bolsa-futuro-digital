import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Pagination, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";

export default function Tabela(props) {
    const [vendaParaEditar, setVendaParaEditar] = useState(null)
    const [vendaParaDeletar, setVendaParaDeletar] = useState(null)
    console.log(props.vendas)

    return(
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>ID do Cliente</TableCell>
                    <TableCell>Produtos</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.vendas.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.idCliente}</TableCell>
                        <TableCell>{row.produtos.map((prod) => {prod.idProduto},)}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => setVendaParaEditar(row)}>
                                <EditOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={() => setVendaParaDeletar(row)}>
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