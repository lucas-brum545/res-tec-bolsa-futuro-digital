import { useState } from "react"

export default function DivisaoConta() {
    const [valorTotal, setValorTotal] = useState("")
    const [numeroPessoas, setNumeroPessoas] = useState("")
    const [valorPorPessoa, setValorPorPessoa] = useState(null)

    function calcularDivisao() {
        const total = parseFloat(valorTotal)
        const pessoas = parseInt(numeroPessoas)
        const valorCalculado = total / pessoas
        setValorPorPessoa(valorCalculado)
    }


    return (
        <>
            <div>
                <h2>Divisão de Conta</h2>
            </div>
            <label htmlFor="">
                <input type="text" placeholder="Valor total da conta" value={valorTotal} onChange={(e) => setValorTotal(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="text" placeholder="Número de pessoas" value={numeroPessoas} onChange={(e) => setNumeroPessoas(e.target.value)} />
            </label>
            <button onClick={calcularDivisao}>Calcular</button>
            {valorPorPessoa !== null && (
                <div>
                    <h3>Valor por pessoa: R$ {valorPorPessoa.toFixed(2)}</h3>
                </div>
            )}
        </>
    )
}