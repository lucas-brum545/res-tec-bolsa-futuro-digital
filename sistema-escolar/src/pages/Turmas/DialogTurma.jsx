import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function DialogTurma(props){
    const [nome, setNome] = useState(props.turmaParaEditar?.nome || "")
    const [ano, setAno] = useState(props.turmaParaEditar?.ano || "")
    const [disciplinaId, setDisciplinaId] = useState(props.turmaParaEditar?.disciplinaId || "")
    const [semestre, setSemestre] = useState(props.turmaParaEditar?.semestre || "")
    const [erro, setErro] = useState(null)

    function enviar(){
        let anoNum = Number(ano)
        if(anoNum < 2000 || anoNum > 2030){
            setErro("ERRO: O ano deve estar entre 2000 e 2030!")
        }
        else{
            let turma = {
                nome: nome,
                disciplinaId:disciplinaId,
                ano:anoNum,
                semestre:Number(semestre)
            }
            if(props.turmaParaEditar){
                turma.id = props.turmaParaEditar.id
            }
            props.onEnviar(turma)
        }
    }

    return (
        <Dialog open fullWidth>
            <DialogTitle>
                {props.turmaParaEditar?`Editar Turma ID ${props.turmaParaEditar.id}?`:
                'Cadastrar Nova Turma'}
            </DialogTitle>
            <form action={enviar}>
                <DialogContent>
                    <Stack spacing={2} sx={{mt:2}}>
                    {/* formulario controlado: dizer qual valor e controlar mudanca de valor - utilizando ESTADO */}
                    <TextField
                        label="nome"
                        value={nome}
                        onChange={(evento)=>setNome(evento.target.value)}
                    />
                    <FormControl>
                        <InputLabel>Disciplinas</InputLabel>
                        <Select
                        label="disciplina"
                        value={disciplinaId}
                        onChange={(evento)=>setDisciplinaId(evento.target.value)}>
                            {props.disciplinas.map(
                                disciplina=>
                                    <MenuItem value={disciplina.id}>{disciplina.id} - {disciplina.nome}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        label="ano"
                        value={ano}
                        type="number"
                        onChange={(evento)=>setAno(evento.target.value)}
                    />
                    <FormControl>
                        <FormLabel>
                            Semestre
                        </FormLabel>
                        <RadioGroup row value={semestre} onChange={(evento=>setSemestre(evento.target.value))}>
                            <FormControlLabel value={1} label="1º Semestre" required control={<Radio/>}/>
                            <FormControlLabel value={2} label="2º Semestre" required control={<Radio/>}/>
                        </RadioGroup>
                    </FormControl>
                    {erro&&<Alert severity="error">{erro}</Alert>}
                    
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onCancelar} color="warning" type="button">
                        Cancelar
                    </Button>
                    <Button type="submit">
                        {props.turmaParaEditar?"Atualizar":"Cadastrar"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}