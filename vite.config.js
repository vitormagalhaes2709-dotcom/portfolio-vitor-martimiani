import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: GitHub Pages serve este site em /portfolio-vitor-martimiani/, não na
// raiz do domínio — sem isso, os assets buildados (JS/CSS/imagens) apontariam
// pra caminhos absolutos errados em produção. Não afeta o dev server (usa "/"
// por padrão fora de build). O React Router lê o mesmo valor via
// import.meta.env.BASE_URL (ver main.jsx) para as rotas baterem certo.
// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-vitor-martimiani/',
  plugins: [react()],
})
