export default function Produto({nome,preco,emPromocao}){
    return (
        <div>
            <p>{nome} - R$ {preco.toFixed(2)} {emPromocao && <span> - <strong>Em promoção!</strong></span>}</p>
        </div>
    )
}