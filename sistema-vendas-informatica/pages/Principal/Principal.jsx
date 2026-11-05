import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import Login from "../Login/Login";
import Menu from "../../components/Menu/Menu";
import Produtos from "../Produtos/Produtos";
import Clientes from "../Clientes/Clientes";
import Vendas from "../Vendas/Vendas";
import { LinearProgress } from "@mui/material";
import api from "../../services/api"; // <-- CORREÇÃO 1: Importando o api que faltava

function RotaSegura({ usuario }) {
    if (usuario) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default function Principal() {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const local = useLocation();

    async function verificaUsuario() {
        setCarregando(true);
        try {
            let retorno = await api.get("/auth/me");
            setUsuario(retorno.data);
        } catch (erro) {
            console.error("Erro ao verificar usuário:", erro);
            setUsuario(null);
        }
        setCarregando(false);
    }

    useEffect(() => {
        verificaUsuario();
    }, [local.pathname]);

    if (carregando) {
        return <LinearProgress color="secondary" sx={{ width: '100%' }} />;
    }

    if (!usuario) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
        );
    }

    return (
        <Menu usuario={usuario}>
            <Routes>
                <Route element={<RotaSegura usuario={usuario} />}>
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/vendas" element={<Vendas />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Menu>
    );
}