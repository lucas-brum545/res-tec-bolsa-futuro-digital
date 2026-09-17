import {useState} from 'react'

export default function AlterarVolume () {
    const [volume, setVolume] = useState(0)

    return (
        <div>
            <p>Volume atual: {volume}</p>
            <button onClick={() => setVolume(volume + 1)}>Aumentar Volume</button>
            <button onClick={() => {if (volume > 0) setVolume(volume - 1)}}>Diminuir Volume</button>
        </div>
    )
}