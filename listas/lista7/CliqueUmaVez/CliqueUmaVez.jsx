import { useState } from 'react'
export default function CliqueUmaVez() {
    const [clicou, setClicou] = useState(false)

    function clicouBotao() {
        setClicou(true)
    }
    return (
        <div>
            <button onClick={clicouBotao} disabled={clicou}>
                {clicou ? 'Clicado!' : 'Clique Aqui'}
            </button>
        </div>
    )
}