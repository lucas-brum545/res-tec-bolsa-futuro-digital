import { useState } from "react"

export default function Media() {
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [media, setMedia] = useState(null)

    function calcularMedia() {
        const n1 = parseFloat(nota1)
        const n2 = parseFloat(nota2)
        const n3 = parseFloat(nota3)
        const mediaCalculada = (n1 + n2 + n3) / 3
        setMedia(mediaCalculada)
    }

    return (
        <>
            <div>
                <h2>Calculadora de Média</h2>
            </div>
            <label htmlFor="">
                <input type="text" placeholder="Nota 1" value={nota1} onChange={(e) => setNota1(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="text" placeholder="Nota 2" value={nota2} onChange={(e) => setNota2(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="text" placeholder="Nota 3" value={nota3} onChange={(e) => setNota3(e.target.value)} /> 
              </label>
            <button onClick={calcularMedia}>Calcular Média</button>
            
            {media !== null && (
                <div>
                    <h3>Média: {media.toFixed(2)}</h3>
                    <p>{media >= 7 ? "Aprovado" : "Reprovado"}</p>
                </div>
            )}
        </>
    )
}