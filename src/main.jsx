import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename casa com o `base` do vite.config.js — em dev é "/" (sem
        efeito); no build do GitHub Pages vira "/portfolio-vitor-martimiani/",
        senão o Router tentaria casar rotas a partir da raiz do domínio. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
