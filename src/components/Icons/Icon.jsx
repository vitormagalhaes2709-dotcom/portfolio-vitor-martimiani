/*
 * Ícones-linha minimalistas desenhados à mão (sem depender de uma lib de
 * ícones externa) para os cards de serviço. Adicione uma nova chave em
 * ICONS para reaproveitar em outras seções.
 */
const ICONS = {
  web: (
    <>
      <polyline points="8 6 3 12 8 18" />
      <polyline points="16 6 21 12 16 18" />
    </>
  ),
  chart: (
    <>
      <rect x="4" y="12" width="3.4" height="8" rx="1" />
      <rect x="10.3" y="7" width="3.4" height="13" rx="1" />
      <rect x="16.6" y="3" width="3.4" height="17" rx="1" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  systems: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  integration: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.1 8.1l7.8 7.8" />
    </>
  ),
  consulting: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-4.2 2.8L9 15l4.2-2.8L15 9z" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  experience: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5" />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.3 7 21l5-3 5 3-1.5-8.7" />
    </>
  ),
  whatsapp: <path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.8-3A8 8 0 0 1 4 12z" />,
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <line x1="8" y1="16" x2="8" y2="11" />
      <circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.5-.5-2.1 2-.2 4-1 4-4.5 0-1.1-.4-2-1-2.7.1-.3.4-1.4 0-2.8 0 0-1-.3-3 1.1a10.4 10.4 0 0 0-5.4 0c-2-1.4-3-1.1-3-1.1-.4 1.4-.1 2.5 0 2.8-.6.7-1 1.6-1 2.7 0 3.5 2 4.3 4 4.5-.6.6-.5 1.1-.5 2.1V19" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
};

export default function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
