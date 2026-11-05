import { Route, Routes, useNavigate } from "react-router";
import Produtos from "../../pages/Produtos/Produtos";
import Clientes from "../../pages/Clientes/Clientes";
import Vendas from "../../pages/Vendas/Vendas";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

const buttons = [
    <Button><StorefrontRoundedIcon sx={{paddingRight:'7px'}}/>Produtos</Button>,
    <Button><GroupsRoundedIcon sx={{paddingRight: '7px'}}/>Clientes</Button>,
    <Button><ShoppingBagRoundedIcon sx={{paddingRight:'7px'}}/>Vendas</Button>
]

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}



CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Menu(props){
    const [ancoraMenu, setAncoraMenu] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const navegador = useNavigate();

    console.error("Menu renderizado com usuário:", props.usuario);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function menuUsuario(evento){
        setAncoraMenu(evento.currentTarget)
    }

    async function logout(){
        await api.post("/auth/logout")
        setAncoraMenu(null)
        navegador("/")
    }

    return (<>        
        {props.usuario && (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', bgcolor: 'primary.main', color: 'white' }}>
            <h1 sx={{ display: 'flex', justifyContent: 'center' }}>SISTEMA DE VENDAS</h1>
            <Stack direction='row' spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <h2>Olá, {props.usuario.nome}</h2>
                <p>Selecione uma das opções abaixo para começar.</p>
            </Stack>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={logout}>Sair</Button>
            </ButtonGroup>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Produtos" {...a11yProps(0)} />
                <Tab label="Clientes" {...a11yProps(1)} />
                <Tab label="Vendas" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <Produtos />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <Clientes />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <Vendas />
        </CustomTabPanel>
    </>
)}
</>
)
}