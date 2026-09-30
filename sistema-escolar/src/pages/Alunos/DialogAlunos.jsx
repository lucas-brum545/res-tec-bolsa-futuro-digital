import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Stack  } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from "dayjs"

export default function DialogAlunos(props){
    function enviar(formData){
        dayjs.extend(customParseFormat)
        let dataIso = ""
        
        if(formData.get("dataNascimento")){
            dataIso = dayjs(formData.get("dataNascimento"), "DD/MM/YYYY")
            .format("YYYY-MM-DD")
        }

        let aluno = {
            nome: formData.get("nome"),
            email: formData.get("email"),
            cpf: formData.get("cpf"),
            dataNascimento: dataIso,
        }

        if(props.alunoParaEditar){
            aluno.id = props.alunoParaEditar.id
        }
        
        props.onEnviar(aluno)
    }

    return (
        <Dialog open fullWidth maxWidth="sm"> {/* breakpoints mui - responsividade*/}
            <form action={enviar}> {/* action: comportamento de formulario nao controlado por estado */}
                <DialogTitle align="center" style={{fontWeight:'bold'}}>
                    {props.alunoParaEditar?`Editar Aluno ID: ${props.alunoParaEditar.id}`:"Cadastrar Novo Aluno"}</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:2}}>
                        <TextField label="Nome" name="nome" required id="outlined-basic" defaultValue={props.alunoParaEditar?.nome} variant="outlined" />
                        <TextField label="E-mail" name="email" required type="email" id="outlined-basic" defaultValue={props.alunoParaEditar?.email} variant="outlined" />
                        <TextField label="CPF" name="cpf" id="outlined-basic" defaultValue={props.alunoParaEditar?.cpf} variant="outlined" />
                        <DatePicker format="DD/MM/YYYY" defaultValue={props.alunoParaEditar?dayjs(props.alunoParaEditar.dataNascimento):null} label="Data de Nascimento" name="dataNascimento"/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    {/* 'type=button' pois por padrao ele é submit dentro de um form */}
                    <Button type="button" onClick={() => props.onCancelar()}>Cancelar</Button>
                    <Button type="submit" color="success">
                        {props.alunoParaEditar?"Atualizar":"Cadastrar"}</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}