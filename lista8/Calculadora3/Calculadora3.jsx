import { useState } from "react"

export default function Calculadora3() {
    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")
    const [valor3, setValor3] = useState("")
    const [soma, setSoma] = useState(null)
    const [mult, setMult] = useState(null)
    const [maior, setMaior] = useState(null)
    const [menor, setMenor] = useState(null)


    function somar(){
        const resultado = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)
        setSoma(resultado)
    }

    function multiplicar(){
        const resultado = parseFloat(valor1) * parseFloat(valor2) * parseFloat(valor3)
        setMult(resultado)
    }

    function encontrarMaior(){
        const resultado = Math.max(parseFloat(valor1), parseFloat(valor2), parseFloat(valor3))
        setMaior(resultado)
    }

    function encontrarMenor(){
        const resultado = Math.min(parseFloat(valor1), parseFloat(valor2), parseFloat(valor3))
        setMenor(resultado)
    }

    return(
        <div>
            <h2>Calculadora 3</h2>
            <label htmlFor="">
                <input type="text" placeholder="Primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="text" placeholder="Segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="text" placeholder="Terceiro valor" value={valor3} onChange={(e) => setValor3(e.target.value)} />
            </label>
            <button onClick={somar}>Somar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={encontrarMaior}>Maior</button>
            <button onClick={encontrarMenor}>Menor</button>
            {soma !== null && <p>Soma: {soma}</p>}
            {mult !== null && <p>Multiplicação: {mult}</p>}
            {maior !== null && <p>Maior: {maior}</p>}
            {menor !== null && <p>Menor: {menor}</p>}
        </div>
    )

}