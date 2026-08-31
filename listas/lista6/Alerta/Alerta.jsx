export default function Alerta({tipo, texto}){
    let alerta

    switch(tipo){
        case "erro":
            // deixar o texto em vermelho e negrito
            alerta = <div><h2 style={{color: "red", fontWeight: "bold"}}>❌ Erro: {texto}</h2></div>
            break
        case "aviso":
            // deixar o texto em laranja e negrito
            alerta = <div><h2 style={{color: "orange", fontWeight: "bold"}}>⚠️ Aviso: {texto}</h2></div>
            break
        case "sucesso":
            // deixar o texto em verde e negrito
            alerta = <div><h2 style={{color: "green", fontWeight: "bold"}}>✅ Sucesso: {texto}</h2></div>
            break

    }

    
    return(
        <>
        {alerta}
        </>
    )
}