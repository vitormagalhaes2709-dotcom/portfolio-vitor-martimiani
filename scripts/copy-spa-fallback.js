// GitHub Pages não faz rewrite de SPA — uma rota profunda como /clima, acessada
// direto ou recarregada, bateria num 404 real do GitHub antes do React Router
// sequer carregar. O truque padrão: servir o MESMO index.html como 404.html,
// já que o GitHub Pages sempre serve o 404.html configurado do repositório
// para qualquer caminho não encontrado — o app carrega normalmente e o
// React Router então resolve a rota client-side a partir da URL real.
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const distDir = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..', 'dist');
copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
console.log('dist/404.html criado a partir de dist/index.html (fallback de SPA pro GitHub Pages).');
