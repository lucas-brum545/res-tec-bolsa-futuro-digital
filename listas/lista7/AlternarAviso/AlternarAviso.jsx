import { useState } from 'react'

export default function AlternarAviso () {
  const [aviso, setAviso] = useState(false)

    return (
        <div>
            <p>{aviso ? <strong><h2>Aviso Ativo!</h2></strong> : 'Aviso Inativo'}</p>
            <button onClick={() => setAviso(!aviso)}>
                Alternar Aviso
            </button>
        </div>
    )
}