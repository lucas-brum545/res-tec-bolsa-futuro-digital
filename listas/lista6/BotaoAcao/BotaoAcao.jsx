export default function BotaoAcao({texto,desabilitado}){
    return (
        <>
        <button disabled={desabilitado}>{texto}</button>
        </>
    )
}