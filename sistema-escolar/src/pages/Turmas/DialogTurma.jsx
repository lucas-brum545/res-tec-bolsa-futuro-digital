import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function DialogTurma(props){
    return (
        <Dialog open>
            <DialogTitle>
                {props.turmaParaEditar?`Editar Turma id: ${props.turmaParaEditar.id} ?`:
                'Cadastrar Nova Turma'}
            </DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>
                <Button onClick={props.onCancelar} color="warning" type="button">
                    Cancelar
                </Button>
                <Button type="submit">
                    {props.turmaParaEditar?"Atualizar":"Cadastrar"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}