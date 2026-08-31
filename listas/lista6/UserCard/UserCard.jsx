export default function UserCard({nome,idade,cidade}){
    let userCard = <div><h2>{nome}</h2><h3>Idade: {idade}</h3><h3>Cidade: {cidade}</h3></div>

    return (
        <>
        {userCard}
        </>
    )
}