import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";

export default function Tabela(props){
   

    return <>
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
                {props.produtos.map((row)=>(
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.nome}</TableCell>
                        <TableCell>{row.cpf}</TableCell>
                        <TableCell>
                            <IconButton>
                                <EditOutlinedIcon/>
                            </IconButton>
                            <IconButton>
                                <DeleteOutlineOutlinedIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>
}