import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";

export default function DialogDisciplinas(props){
    function enviar(formData){
        let disciplina = {
            nome: formData.get("nome"),
            cargaHoraria: formData.get("cargaHoraria"),
        }

        if(props.disciplinaParaEditar){
            disciplina.id = props.disciplinaParaEditar.id
        }

        props.onEnviar(disciplina)
    }

    return(
        <>
            <Dialog open fullWidth maxWidth="sm">
                <form action={enviar}>
                    <DialogTitle align="center" style={{fontWeight:'bold'}}>
                        {props.disciplinaParaEditar?`Editar Disciplina ID: ${props.disciplinaParaEditar.id}`:"Cadastrar nova disciplina"}
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={2} sx={{mt:2}}>
                            <TextField label="Nome da disciplina" name="nome" required defaultValue={props.disciplinaParaEditar?.nome}></TextField>
                            <TextField label="Carga horária" name="cargaHoraria" required defaultValue={props.disciplinaParaEditar?.cargaHoraria}></TextField>
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={() => props.onCancelar()}>Cancelar</Button>
                        <Button type="submit" color="success">
                            {props.disciplinaParaEditar?"Atualizar":"Cadastrar"}</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}