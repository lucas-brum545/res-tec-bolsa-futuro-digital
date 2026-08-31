import UserCard from '../UserCard/UserCard'

export default function GerenciaCards(props){
    let userCards = props.usuarios.map(usuario => <UserCard
    nome={usuario.nome}
    idade={usuario.idade}
    cidade={usuario.cidade}/>)

    return (
        <>
        {userCards}
        </>
    )
}