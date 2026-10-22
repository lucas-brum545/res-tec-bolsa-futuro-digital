import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu as MenuMaterial, MenuItem } from "@mui/material"
import { School } from "@mui/icons-material"
import { Link, useNavigate } from "react-router"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from "react";
import api from '../../services/api'

export default function Menu(props){
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
    const [ancoraMenu, setAncoraMenu] = useState(null)
    const navegador = useNavigate()

    function menuUsuario(evento){
        setAncoraMenu(evento.currentTarget)
    }

    async function logout(){
        await api.post("/auth/logout")
        setAncoraMenu(null)
        navegador("/")
    }

    return <>
        <AppBar position="static" sx={{color:'purple'}}>
            <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
                <IconButton component={Link} to="/">
                    <School fontSize="large" sx={{color:"white"}}></School>
                    </IconButton>
                        <Typography variant="h4" sx={{ml:3, color:"white"}}>
                            Sistema de Gestão Escolar
                        </Typography>
                        <Box sx={{display:"flex", flexGrow:0.7, justifyContent:"space-evenly"}}>
                            {props.usuario && paginas.map(pagina =>
                            <Button component={Link} to={pagina.local} variant="text" size="large" sx={{color:"white"}}>
                            <Typography variant="h5" sx={{color:"white", textTransform:"none"}}>
                                {pagina.rotulo}
                            </Typography>
                            </Button>
                            )}
                        </Box>
                        {props.usuario?<>
                        <IconButton onClick={menuUsuario}><AccountCircleOutlinedIcon fontSize="large">  
                        </AccountCircleOutlinedIcon></IconButton>
                        <MenuMaterial open={Boolean(ancoraMenu)} anchorEl={ancoraMenu} onClose={()=>setAncoraMenu(null)}>
                                <MenuItem onClick={logout}>
                                    Logout
                                </MenuItem>
                            </MenuMaterial> 
                        </>:
                        <Button onClick={()=>navegador("/login")} sx={{color:"white"}}>Login</Button>
                        } 
            </Toolbar>
        </AppBar>
    </>
}