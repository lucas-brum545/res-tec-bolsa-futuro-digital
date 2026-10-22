// import Principal from "../Principal"
import Menu from "../Menu"
import Home from "../../pages/Home" // caminho relativo
import Alunos from "../../pages/Alunos"
import Disciplinas from "../../pages/Disciplinas"
import Turmas from "../../pages/Turmas"
import { Navigate, Outlet, Route, Routes } from "react-router"
import Login from "../../pages/Login"
import { useLocation } from "react-router"
import api from '../../services/api'
import { LinearProgress } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"

function RotaSegura(props){
    if(props.usuario){
        return <Outlet>
        </Outlet>
    }
    else{
        return <Navigate to="/" replace>
        </Navigate>
    }
}

export default function Principal(){
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState(null)
    const local = useLocation()
    console.log("local atual: ", local)

    async function verificaAutenticacao(){
        setCarregando(true)
        try{
        let retorno = await api.get("/auth/me")
        setUsuario(retorno.data)
        }catch(error){
            setUsuario(null)
        }finally{
            setCarregando(false)
        }
    }

    useEffect(()=>{
        verificaAutenticacao()
    }, [local.pathname])

    if(carregando){
        return <LinearProgress/>
    }

    return <>
    <Menu usuario={usuario}/>
        <Routes>
            <Route element={<RotaSegura usuario={usuario}/>}>
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/disciplinas" element={<Disciplinas />} />
            <Route path="/turmas" element={<Turmas />} />
            </Route>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </>
}