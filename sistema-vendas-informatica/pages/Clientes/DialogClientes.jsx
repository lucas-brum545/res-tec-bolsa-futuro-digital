import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";

export default function DialogClientes(props) {
    function enviar(formData){
        let cliente = {
            nome: formData.get("nome"),
            cpf: formData.get("cpf")
        }

        props.onEnviar(cliente)
    }

    return(
        <>
        <Dialog open fullWidth maxWidth="sm">
            <form action={enviar}>
                <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:2}}>
                        <TextField label="Nome" name="nome" required id="outlined-basic" variant="outlined"></TextField>
                        <TextField label="CPF" name="cpf" required id="outlined-basic" variant="outlined"></TextField>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={()=>props.onFechar()}>Cancelar</Button>
                    <Button type="submit" color="success" sx={{fontWeight:'bold'}}>Cadastrar</Button>
                </DialogActions>
            </form>
        </Dialog>
        </>
    )
}