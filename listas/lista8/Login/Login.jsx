import { useState } from "react"

export default function Login() {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [logado, setLogado] = useState(false)
    const [erro, setErro] = useState(false)

    function logar() {
        if (usuario === "root" && senha === "xyx123") {
            setLogado(true)
        }
        else {
            // exibir em vermelho a mensagem de erro
            setErro(true)
        }
    }

    let mensagemErro = <div style={{ color: "red" }}>
                    <h3>Usuário ou senha incorretos!</h3>
                </div>
    
    let loginSucesso = <div><h3 style={{ color: "green" }}>Bem-vindo, {usuario}!</h3></div>

    return (
        <>
            {logado ? (
                loginSucesso
            ) : (
                <div>
                    <h2>Login</h2>
            <label htmlFor="">
                <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </label>
            <button onClick={logar}>Logar</button>
            </div>
            )}
            {erro && (
                <div style={{ color: "red" }}>
                    <h3>Usuário ou senha incorretos!</h3>
                </div>
            )}
        </>
    )
}