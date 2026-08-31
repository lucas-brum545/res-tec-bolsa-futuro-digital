import Alerta from "../Alerta/Alerta";

export default function GerenciaAlertas(props){
    let alerta = props.alertas.map(alerta => <Alerta
    tipo={alerta.tipo}
    texto={alerta.texto}/>)
    return (
        <>
        {alerta}
        </>
    )
}