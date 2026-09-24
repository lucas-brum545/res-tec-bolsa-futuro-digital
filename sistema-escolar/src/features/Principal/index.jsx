// import Principal from "../Principal"
import Menu from "../Menu"
import Home from "../../pages/Home" // caminho relativo
import Alunos from "../../pages/Alunos"
import Disciplinas from "../../pages/Disciplinas"
import Turmas from "../../pages/Turmas"
import { Route, Routes } from "react-router"

export default function Principal(){
    return <>
    <Menu />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/disciplinas" element={<Disciplinas />} />
            <Route path="/turmas" element={<Turmas />} />
        </Routes>
    </>
}