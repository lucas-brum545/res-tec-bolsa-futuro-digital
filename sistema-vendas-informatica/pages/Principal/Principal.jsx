import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import Login from "../Login/Login";
import Menu from "../../components/Menu/Menu";
import Produtos from "../Produtos/Produtos";
import Clientes from "../Clientes/Clientes";
import Vendas from "../Vendas/Vendas";

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
    const [usuario, setUsuario] = useState(null)

    return (
        <Menu/>
        // <Menu usuario={usuario}>
        //     <Routes>
        //         <Route element={<RotaSegura usuario={usuario}/>}>
        //         <Route path="/produtos" element={<Produtos/>}></Route>
        //         <Route path="/clientes" element={<Clientes/>}></Route>
        //         <Route path="/vendas" element={<Vendas/>}></Route>
        //         </Route>
        //         <Route path="/login" element={<Login></Login>}></Route>
        //     </Routes>
        // </Menu>
    )
}