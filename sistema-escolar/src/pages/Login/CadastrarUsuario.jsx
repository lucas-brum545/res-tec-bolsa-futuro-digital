import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";
import api from "../../services/api";

export default function CadastrarUsuario(props){
    const [msg, setMsg] = useState("")

    async function cadastrar(formData){
        let usuario = {
            username: formData.get("username"),
            password: formData.get("password")
        }

        try{
            await api.post("/users", usuario)
            props.onFechar()
        }
        catch(error){
            setMsg(error.response.data.mensagem)
        }
    }


    return <Dialog open fullWidth>
        <DialogTitle>Cadastrar Novo Usuário</DialogTitle>
        <form action={cadastrar}>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:3}}>
                    <TextField name="username" label="usuario" required placeholder="Usuário"/>
                    <TextField name="password" label="senha" type="password" required placeholder="Senha"/>
                    {msg && <Alert severity="error">{msg}</Alert>}
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={props.onFechar}>Cancelar</Button>
                    <Button type="submit">Cadastrar</Button>
                </DialogActions>
            </form>
    </Dialog>
}