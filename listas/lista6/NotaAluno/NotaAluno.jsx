export default function NotaAluno({nome,nota}){
    return (
        <div>
            <p>{nome} - Nota: {nota.toFixed(1)} {nota >= 7 ? <span> - <strong>Aprovado</strong></span> : <span> - <strong>Reprovado!</strong></span>}</p>
        </div>
    )
}