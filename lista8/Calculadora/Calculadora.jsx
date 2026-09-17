import { useState } from "react"

export default function Calculadora() {
    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")
    const [operacao, setOperacao] = useState("")
    const [resultado, setResultado] = useState(null)

    function calcular(){
        let res
        switch(operacao){
            case "+":
                res = parseFloat(valor1) + parseFloat(valor2)
                break
            case "-":
                res = parseFloat(valor1) - parseFloat(valor2)
                break
            case "*":
                res = parseFloat(valor1) * parseFloat(valor2)
                break
            case "/":
                res = parseFloat(valor1) / parseFloat(valor2)
                break
            default:
                res = 0
        }
        setResultado(res)
    }

    return(
        <>
        <div>
            <h2>Calculadora</h2>
        </div>
        <label htmlFor="">
            <input type="text" placeholder="Primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />
        </label>
        <label htmlFor="">
            <input type="text" placeholder="Segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />
        </label>
        <select name="" id="" onChange={(e) => setOperacao(e.target.value)}>
            <option value="">Selecione a opção</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <button onClick={calcular}>Calcular</button>
        {resultado !== null && (
            <div>
                <h3>Resultado: {resultado}</h3>
            </div>
        )}
        </>
    )
}