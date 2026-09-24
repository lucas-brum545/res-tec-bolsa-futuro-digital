import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material"
import { School } from "@mui/icons-material"
import { Link } from "react-router"

export default function Menu(){
    const paginas = [
        {
            rotulo:'Alunos', local:'/alunos'
        },
        {
            rotulo:'Disciplinas', local:'/disciplinas'
        },
        {
            rotulo:'Turmas', local:'/turmas'
        }
    ]

    return <>
        <AppBar position="static">
            <Toolbar disableGutters>
                <IconButton component={Link} to="/">
                    <School fontSize="large" sx={{color:"white"}}></School>
                    </IconButton>
                        <Typography variant="h4" sx={{ml:3, color:"white"}}>
                            Sistema de Gestão Escolar
                        </Typography>
                        <Box sx={{display:"flex", flexGrow:0.7, justifyContent:"space-evenly"}}>
                            {paginas.map(pagina =>
                            <Button component={Link} to={pagina.local} variant="text" size="large" sx={{color:"white"}}>
                            <Typography variant="h5" sx={{color:"white", textTransform:"none"}}>
                                {pagina.rotulo}
                            </Typography>
                            </Button>
                            )}
                        </Box>
            </Toolbar>
        </AppBar>
    </>
}