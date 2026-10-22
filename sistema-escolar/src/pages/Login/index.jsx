import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material"
import api from "../../services/api"
import { useNavigate } from "react-router"
import { useState } from "react"
import CadastrarUsuario from "./CadastrarUsuario"

export default function Login(props){
    const navegador = useNavigate()
    const [mensagem, setMensagem] = useState('')
    const [exibirCadastro, setExibirCadastro] = useState(false)
    
    async function logar(formData){
        let usuario = {
            username: formData.get("username"),
            password: formData.get("password")
        }
        try{
            await api.post("/auth/login", usuario)
            navegador("/") 
        }catch(error){
            // capturando erro do back end
            setMensagem(error.response.data.mensagem)
        }
    }


    return (
        <Dialog open fullWidth>
            {exibirCadastro && <CadastrarUsuario onFechar={()=>setExibirCadastro(false)}/>}
            <DialogTitle sx={{display:"flex",justifyContent:"center"}}>Login</DialogTitle>
            <form action={logar}>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:3}}>
                    <TextField name="username" label="usuario" required placeholder="Usuário"/>
                    <TextField name="password" label="senha" type="password" required placeholder="Senha"/>
                    {mensagem && <Alert severity="error">{mensagem}</Alert>}
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={()=>setExibirCadastro(true)}>Cadastrar Novo Usuário</Button>
                    <Button type="submit">Logar</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}