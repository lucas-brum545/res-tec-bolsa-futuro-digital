import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// referencia maior REACT - https://pt-br.react.dev/reference/react
// tela branca: erro aparece no terminal ou no dev tools (f12)
// filho passa informacoes ao pai (e vice-versa) por EVENTOS - programacao orientada a eventos

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
