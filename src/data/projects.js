/*
 * Campos estruturais (independentes de idioma). Título/descrição ficam em
 * src/i18n/translations.js -> projects.items, casados pelo `id`.
 * `category` deve ser uma das chaves de projects.filters.
 * `image` é opcional: sem imagem real, o card usa um thumbnail gerado via CSS.
 */
export const projects = [
  {
    id: 'proj-1',
    category: 'web',
    tags: ['React', 'Vite', 'CSS Modules'],
    link: '#',
    video: null,
    image: null,
  },
  {
    id: 'proj-2',
    category: 'integration',
    tags: ['Node.js', 'JavaScript', 'REST API'],
    link: '/clima',
    linkType: 'internal',
    repo: 'https://github.com/vitormagalhaes2709-dotcom/bot-alertas-climaticos',
    video: null,
    image: null,
  },
  {
    id: 'proj-3',
    category: 'automation',
    tags: ['Python', 'MySQL', 'Power BI'],
    link: '/pedidos',
    linkType: 'internal',
    repo: 'https://github.com/vitormagalhaes2709-dotcom/pipeline-mysql-powerbi',
    video: null,
    image: null,
  },
  {
    id: 'proj-4',
    category: 'uiux',
    tags: ['HTML5', 'CSS', 'A11y'],
    link: '/liz-imoveis',
    linkType: 'internal',
    repo: 'https://github.com/vitormagalhaes2709-dotcom/landing-page-redesign',
    video: null,
    image: null,
  },
];
