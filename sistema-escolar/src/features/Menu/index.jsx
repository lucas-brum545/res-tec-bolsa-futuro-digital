import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material"
import { School } from "@mui/icons-material"

export default function Menu(){
    return <>
        <AppBar position="static">
            <Toolbar disableGutters>
                <IconButton>
                    <School fontSize="large" sx={{color:"white"}}></School>
                    </IconButton>
                        <Typography variant="h4" sx={{ml:3, color:"white"}}>
                            Sistema de Gestão Escolar
                        </Typography>
                        <Box>
                            <Button variant="text" size="large" sx={{color:"white"}}>
                                Alunos
                            </Button>
                            <Button variant="text" size="large" sx={{color:"white"}}>
                                Disciplinas
                            </Button>
                            <Button variant="text" size="large" sx={{color:"white"}}>
                                Turmas
                            </Button>
                        </Box>
                    
                

            </Toolbar>
        </AppBar>
    </>
}