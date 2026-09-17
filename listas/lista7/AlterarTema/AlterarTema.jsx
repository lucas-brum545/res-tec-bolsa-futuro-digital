import { useState } from 'react'

export default function AlterarTema () {
  const [tema, setTema] = useState('light')

  return (
    <div style={{ backgroundColor: tema === 'light' ? '#f0f0f0' : '#000000', color: tema === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>Este é o conteúdo que muda de tema.</p>
      <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>
        Alterar Tema
      </button>
    </div>
  )
}