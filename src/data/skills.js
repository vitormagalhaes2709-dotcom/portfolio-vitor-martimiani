/*
 * Habilidades do currículo. `name` pode ser uma string (nomes de tecnologia
 * não se traduzem — mesmo termo em PT/EN/ES) ou um objeto { pt, en, es }
 * para itens que são competências descritas em português, como "Lógica de
 * Programação" abaixo. Ver Skills.jsx para a resolução por idioma.
 */
export const skills = [
  { id: 'css', name: 'CSS' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'javascript', name: 'JavaScript' },
  {
    id: 'programming-logic',
    name: {
      pt: 'Lógica de Programação',
      en: 'Programming Logic',
      es: 'Lógica de Programación',
    },
  },
  { id: 'react', name: 'React' },
  { id: 'powerbi', name: 'Power BI' },
  { id: 'mysql', name: 'MySQL' },
  { id: 'python', name: 'Python' },
];
