import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Menu, Stack, TextField } from '@mui/material'
import { useState } from 'react'

export default function Login(){
    const [mensagem, setMensagem] = useState('')

    function logar(formData){
        let login = {
            usuario: formData.get('usuario'),
            senha: formData.get('senha')
        }

        if(login.usuario != 'teste' || login.senha != '123456'){
            setMensagem('Usuário e/ou senha incorretos.')
        }
        else{
            return <Menu></Menu>
        }
    }

    return <Dialog open fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>Acesse o sistema</DialogTitle>
        <form action={logar}>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 3, display:'flex', justifyContent:'center', padding:'15px'}}>
                    <TextField name='usuario' label='Usuário' placeholder='Usuário' required />
                    <TextField name='senha' label='Senha' type='password' placeholder='Senha' required />
                    {mensagem && <Alert severity='error'>{mensagem}</Alert>}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button type='submit' sx={{fontWeight:'bold'}}>Logar</Button>
            </DialogActions>
        </form>
    </Dialog>
}