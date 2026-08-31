import Produto from "../Produto/Produto";

export default function GerenciaProdutos(props){
    let produtos = props.produtos.map(produto => <Produto
    nome={produto.nome}
    preco={produto.preco}
    emPromocao={produto.emPromocao}/>)
    
    return (
        <>
        {produtos}
        </>
    )
}