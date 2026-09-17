import React, { useState } from 'react';

export default function Lampada() {
  // Estado que controla a intensidade da luz de 0 a 100
  const [intensidade, setIntensidade] = useState(50);

  // Funções para aumentar e diminuir respeitando os limites (0 a 100)
  const aumentarLuz = () => {
    setIntensidade((prev) => Math.min(prev + 10, 100));
  };

  const diminuirLuz = () => {
    setIntensidade((prev) => Math.max(prev - 10, 0));
  };

  // Calcula a cor amarela com base na intensidade (quanto maior, mais brilhante)
  // Usamos a intensidade para definir o brilho e a opacidade
  const estiloLampada = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#ffeb3b', // Amarelo lâmpada
    // A opacidade varia de 0.1 (quase apagada) até 1.0 (totalmente acesa)
    opacity: intensidade === 0 ? 0.2 : intensidade / 100,
    // Adiciona um efeito de brilho (box-shadow) que aumenta conforme a luz fica forte
    boxShadow: intensidade > 0 ? `0 0 ${intensidade}px ${intensidade / 2}px #ffeb3b` : 'none',
    transition: 'all 0.2s ease-in-out',
    margin: '20px auto'
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px', fontFamily: 'sans-serif' }}>
      <h3>Controle Gradual da Lâmpada</h3>

      {/* Ícone / Representação da Lâmpada */}
      <div style={estiloLampada}></div>

      {/* Mostra a porcentagem atual */}
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Intensidade: {intensidade}%
      </p>

      {/* Botões de controle */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
        <button 
          onClick={diminuirLuz}
          disabled={intensidade === 0}
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
          Diminuir (-)
        </button>

        <button 
          onClick={aumentarLuz}
          disabled={intensidade === 100}
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
          Aumentar (+)
        </button>
      </div>
    </div>
  );
}