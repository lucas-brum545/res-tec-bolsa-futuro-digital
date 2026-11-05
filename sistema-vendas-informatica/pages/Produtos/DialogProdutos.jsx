import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";

export default function DialogProdutos(props){

    function enviar(formData){
        let produto = {
            nome: formData.get('nome'),
            valor: formData.get('valor'),
            estoque: formData.get('estoque')
        }
        props.onEnviar(produto)
    }

    return (
        <>
        <Dialog open fullWidth maxWidth="sm">
            <form action={enviar}>
                <DialogTitle>Cadastrar Novo Produto</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:2}}>
                        <TextField label="Nome" name="nome" required id="outlined-basic" variant="outlined"></TextField>
                        <TextField label="Valor" name="valor" required id="outlined-basic" variant="outlined"></TextField>
                        <TextField label="Quantidade em estoque" name="estoque" required id="outlined-basic" variant="outlined"></TextField>
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