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

  // --- Clima (página /clima) ---
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  moon: <path d="M15.5 3.5a8.5 8.5 0 1 0 5 15.4A9.5 9.5 0 0 1 15.5 3.5z" />,
  cloud: <path d="M7 18a4.2 4.2 0 0 1-.6-8.35 5.5 5.5 0 0 1 10.8-1.4A4 4 0 0 1 17 18H7z" />,
  cloudSun: (
    <>
      <circle cx="16.5" cy="7.2" r="3" />
      <path d="M16.5 2.4v1.4M20.3 3.7l-1 1M12.7 3.7l1 1" />
      <path d="M7 18a4.2 4.2 0 0 1-.4-8.38A5 5 0 0 1 15.9 9.9 4 4 0 0 1 16.6 18H7z" />
    </>
  ),
  cloudMoon: (
    <>
      <path d="M18.4 3a5 5 0 1 0 2.9 8.9A5.6 5.6 0 0 1 18.4 3z" />
      <path d="M7 18a4.2 4.2 0 0 1-.4-8.38A5 5 0 0 1 15.4 10.4 4 4 0 0 1 16.2 18H7z" />
    </>
  ),
  cloudRain: (
    <>
      <path d="M6.5 15.5a4 4 0 0 1-.4-7.98A5.2 5.2 0 0 1 16.3 8.4 3.8 3.8 0 0 1 16 15.5H6.5z" />
      <path d="M8.5 18.5l-1 2.2M12.5 18.5l-1 2.2M16.5 18.5l-1 2.2" />
    </>
  ),
  cloudLightning: (
    <>
      <path d="M6.5 14.5a4 4 0 0 1-.4-7.98A5.2 5.2 0 0 1 16.3 7.4 3.8 3.8 0 0 1 16 14.5H6.5z" />
      <path d="M12.8 14.5l-3 5h3l-1.5 4 4.5-6h-3l1.5-3z" fill="currentColor" stroke="none" />
    </>
  ),
  snow: (
    <>
      <path d="M6.5 12.5a4 4 0 0 1-.4-7.98A5.2 5.2 0 0 1 16.3 5.4 3.8 3.8 0 0 1 16 12.5H6.5z" />
      <path d="M9 17v4M7 18l4 2M13 18l-4 2M15 17v4M13 18l4 2M17 18l-4 2" />
    </>
  ),
  fog: <path d="M3 8h12M3 12.5h16a3.6 3.6 0 0 0 3-5.6M3 17h13" />,
  wind: <path d="M3 8h11a2.5 2.5 0 1 0-2.2-3.6M3 12h15a2.8 2.8 0 1 1-2.4 4.2M3 16h9" />,
  drop: <path d="M12 3s6 7 6 11.5A6 6 0 0 1 6 14.5C6 10 12 3 12 3z" />,
  uv: (
    <>
      <circle cx="12" cy="13" r="4" />
      <path d="M12 5.3V4M6.3 8.3l-.9-.9M17.7 8.3l.9-.9M4 13H2.7M21.3 13H20" />
    </>
  ),
  sunrise: (
    <>
      <circle cx="12" cy="14" r="3.2" />
      <path d="M12 8.3V6M6.6 10.6 5 9M17.4 10.6 19 9M3 14h2M19 14h2" />
      <path d="M4 18h16" />
      <path d="M9 6.5l3-3 3 3" />
    </>
  ),
  sunset: (
    <>
      <circle cx="12" cy="14" r="3.2" />
      <path d="M12 8.3V6M6.6 10.6 5 9M17.4 10.6 19 9M3 14h2M19 14h2" />
      <path d="M4 18h16" />
      <path d="M9 4.5l3 3 3-3" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a3.5 3.5 0 1 0 4 0z" />
      <circle cx="10" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  // --- Status de pedidos (página /pedidos) ---
  statusPago: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5 5.5-6" />
    </>
  ),
  statusPendente: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  statusCancelado: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  banknote: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 9v.01M18.5 15v.01" />
    </>
  ),
  cart: (
    <>
      <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <path d="M2.5 4h2.4l2.3 11.4a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.6L21 7.5H6.2" />
    </>
  ),

  // --- Liz Imóveis (página /liz-imoveis) ---
  document: (
    <>
      <path d="M6.5 3.5h8l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 6.5 3.5z" />
      <path d="M14.5 3.5V7a1 1 0 0 0 1 1h3" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5h12V10" />
      <path d="M10 19.5v-6h4v6" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18v-6.5A1.5 1.5 0 0 1 4.5 10H12v3.5" />
      <path d="M3 15.5h18V18" />
      <path d="M12 13.5h7.5A1.5 1.5 0 0 1 21 15v3" />
      <circle cx="6.5" cy="12" r="1" />
      <path d="M3 18v2.5M21 18v2.5" />
    </>
  ),
  ruler: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="1.2" transform="rotate(-8 12 12)" />
      <path d="M7.3 9.6l.6 2M11 9l.6 2M14.7 8.4l.6 2" />
    </>
  ),
};

export default function Icon({ name, className, style }) {
  return (
    <svg
      className={className}
      style={style}
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
