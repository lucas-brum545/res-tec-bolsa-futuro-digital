import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import Login from "../Login/Login";
import Menu from "../../components/Menu/Menu";
import Produtos from "../Produtos/Produtos";
import Clientes from "../Clientes/Clientes";
import Vendas from "../Vendas/Vendas";
import { LinearProgress, Paper } from "@mui/material";
import api from "../../services/api";

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
        return <LinearProgress color="primary" sx={{ width: '100%' }} />;
    }

    return (<>
        <Menu usuario={usuario} />
            <Routes>
                <Route element={<RotaSegura usuario={usuario} />}>
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/vendas" element={<Vendas />} />
                    <Route path="/" element={<></>} />
                </Route>
                <Route path="/login" element={usuario ? <Navigate to="/" replace /> : <Login />} />
            </Routes>
        </>
    );
}