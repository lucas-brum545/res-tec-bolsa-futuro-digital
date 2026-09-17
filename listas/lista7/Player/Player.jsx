import {useState} from 'react'

export default function Player () {
    const [volume, setVolume] = useState(0)
    const [clicou, setClicou] = useState(false)

    function clicouBotao() {
        setClicou(!clicou)
    }

    return (
        <div>
            <p><strong>Madonna - I Love New York</strong></p>
            {/* cada vez que e clicado o botao de play, ele muda para pause e vice versa */}
            <button onClick={clicouBotao}>
                {clicou ? '⏸️' : '▶️'}
            </button>
            <p>Volume atual: {volume}</p>
            <button onClick={() => setVolume(volume + 1)}>➕</button>
            <button onClick={() => {if (volume > 0) setVolume(volume - 1)}}>➖</button>
        </div>
    )
}
