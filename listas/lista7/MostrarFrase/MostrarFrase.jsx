import { useState } from 'react'

export default function MostrarFrase() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <>

    {mostrar && (
        <p style={{ background: '#e2e8f0', padding: '10px', borderRadius: '4px' }}>
          Olá! Esta é a frase que apareceu na tela após o clique.
        </p>
      )}
    {/* Botões para controlar a ação */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button 
          onClick={() => setMostrar(true)}
          style={{ padding: '8px 12px', background: '#2104c2', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Mostrar
        </button>

        <button 
          onClick={() => setMostrar(false)}
          style={{ padding: '8px 12px', background: 'rgb(8, 23, 236)', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Esconder
        </button>
      </div>
    </>
  )
}
