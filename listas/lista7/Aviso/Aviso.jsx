import React, { useState } from 'react';

export default function Aviso() {
  const [aviso, setAviso] = useState(false)

    function avisoSucesso() {
        setAviso(true)
        alert('Sucesso! A operação foi realizada com sucesso.')
    }

    function avisoErro() {
        setAviso(true)
        alert('Erro! Ocorreu um erro ao realizar a operação.')
    }

    function avisoAviso() {
        setAviso(true)
        alert('Aviso! Atenção para esta informação importante.')
    }

    return (
        <div>
            <button onClick={avisoSucesso}>
                Sucesso
            </button>
            <button onClick={avisoErro}>
                Erro
            </button>
            <button onClick={avisoAviso}>
                Aviso
            </button>

        </div>
    )
}