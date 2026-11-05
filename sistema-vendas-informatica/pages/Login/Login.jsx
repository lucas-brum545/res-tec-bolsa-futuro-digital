import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Menu, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Login(){
    const navegador = useNavigate();
    const [mensagem, setMensagem] = useState('')

    async function logar(formData){
        let login = {
            username: formData.get('usuario'),
            password: formData.get('senha')
        }

        try{
            await api.post("/auth/login", login)
            setMensagem('')
            navegador("/")
        }catch(error){
            setMensagem(error.response?.data?.mensagem || "Erro ao efetuar login. Tente novamente.")
        }
    }

    return (<Dialog open fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'center', borderRadius:'15px', padding:'25px' }}>Acesse o sistema</DialogTitle>
        <form action={logar}>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 3, display:'flex', justifyContent:'center', padding:'15px'}}>
                    <TextField name='username' label='Usuário' placeholder='Usuário' required />
                    <TextField name='password' label='Senha' type='password' placeholder='Senha' required />
                    {mensagem && <Alert severity='error'>{mensagem}</Alert>}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button type='submit' sx={{fontWeight:'bold'}}>Logar</Button>
            </DialogActions>
        </form>
    </Dialog>)
}