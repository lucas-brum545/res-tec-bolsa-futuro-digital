import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";

export default function DialogVendas(props) {
    
    return <>
        <Dialog open fullWidth maxWidth="sm">
            <form action="">
                <DialogTitle>Cadastrar Nova Venda</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:2}}>
                        
                    </Stack>
                </DialogContent>
            </form>
        </Dialog>
    </>
}