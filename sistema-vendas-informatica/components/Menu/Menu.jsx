import { Route, Routes } from "react-router";
import Produtos from "../../pages/Produtos/Produtos";
import Clientes from "../../pages/Clientes/Clientes";
import Vendas from "../../pages/Vendas/Vendas";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

const buttons = [
    <Button><StorefrontRoundedIcon sx={{paddingRight:'7px'}}/>Produtos</Button>,
    <Button><GroupsRoundedIcon sx={{paddingRight: '7px'}}/>Clientes</Button>,
    <Button><ShoppingBagRoundedIcon sx={{paddingRight:'7px'}}/>Vendas</Button>
]

export default function Menu(){


    return (<>
        <Box sx={{bgcolor:'primary.main', color:'white', alignItems:'center', padding:'30px'}}>
            <Stack>
            <h1>Bem-vindo, usuário!</h1>
            <p>Selecione uma das opções abaixo para começar.</p>
            
            </Stack>
        </Box>
        <Stack sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <ButtonGroup size="large" variant="contained">
            {buttons}
            </ButtonGroup>
        </Stack>
        {/* // <Routes>
        //     <Route path="/produtos" element={<Produtos/>}></Route>
        //     <Route path="/clientes" element={<Clientes/>}></Route>
        //     <Route path="/vendas" element={<Vendas/>}></Route>
        // </Routes> */}

        </>
    )
}