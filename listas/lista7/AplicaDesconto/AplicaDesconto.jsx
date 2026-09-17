import { useState } from 'react';
export default function AplicaDesconto() {
    const [preco, setPreco] = useState(100);
    const [desconto, setDesconto] = useState(10);
    const [clicou, setClicou] = useState(false);
    const precoComDesconto = preco - (preco * desconto / 100);

    return (
        <div>
            {/* começa exibindo o preço original, caso o usuario clique no botão o preço original some e o valor com desconto aumenta em 10% e o preço com desconto é exibido */}
            {!clicou ? (
                <p>Preço: R$ {preco.toFixed(2)}</p>
            ) : (
                <p><strong style={{ color: 'green' }}>Preço com desconto: R$ {precoComDesconto.toFixed(2)}</strong></p>
            )}
            <button onClick={() => {
                setClicou(true);
                setDesconto(desconto + 10);
            }} disabled = {clicou} >Aplicar Desconto</button>
        </div>
    )
}