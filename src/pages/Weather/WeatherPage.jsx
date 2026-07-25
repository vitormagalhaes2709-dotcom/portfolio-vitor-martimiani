import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../../i18n/LanguageContext';
import Icon from '../../components/Icons/Icon';
import { fetchWeatherSnapshot } from '../../services/weatherApi';
import {
  resolveBackgroundKey,
  resolveConditionIcon,
  resolveWeatherCondition,
} from '../../utils/weatherCondition';
import styles from './WeatherPage.module.css';

// Mesma cidade default do bot-alertas-climaticos (ver bot-alertas-climaticos/src/config.js)
// — esta página é a demonstração ao vivo daquele projeto, então mantém a mesma localização.
const LOCATION = { latitude: -23.5505, longitude: -46.6333 };
const BOT_REPO_URL = 'https://github.com/vitormagalhaes2709-dotcom/bot-alertas-climaticos';

// Open-Meteo devolve datas isoladas ("2026-07-24") que o JS trata como meia-noite
// UTC — formatando direto, fusos negativos (ex.: -03:00) mostram o dia anterior.
// Fixamos em meio-dia local antes de formatar para exibir o dia correto.
function parseCalendarDate(dateStr) {
  return new Date(`${dateStr}T12:00:00`);
}

export default function WeatherPage() {
  const { t, lang } = useLanguage();
  const weatherText = t('weather');
  const [snapshot, setSnapshot] = useState(null);
  const [status, setStatus] = useState('loading');
  // Efeito hover-only (decorativo): não há equivalente por teclado porque os
  // valores em si já são visíveis sem o hover — o fundo é só um bônus visual.
  const [hoverEffect, setHoverEffect] = useState(null);

  const load = useCallback(() => {
    setStatus('loading');
    fetchWeatherSnapshot(LOCATION)
      .then((data) => {
        setSnapshot(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    document.title = `${weatherText.title} · Vitor Martimiani`;
  }, [weatherText.title]);

  const condition = snapshot ? resolveWeatherCondition(snapshot.current.weatherCode) : null;
  const isDay = snapshot?.current.isDay ?? true;
  const backgroundKey = condition ? resolveBackgroundKey(condition, isDay) : 'clear-day';
  const heroIconName = condition ? resolveConditionIcon(condition, isDay) : 'sun';
  // Céu com nuvens de verdade "flui" (várias nuvens cruzando a tela); as
  // demais condições (sol, chuva, neve...) usam o ícone único centralizado.
  const showCloudField = condition === 'cloudy' || condition === 'partly-cloudy';

  const localeTag = lang === 'pt' ? 'pt-BR' : lang;
  const timeFormatter = new Intl.DateTimeFormat(localeTag, { hour: '2-digit', minute: '2-digit' });
  const dayFormatter = new Intl.DateTimeFormat(localeTag, { weekday: 'short' });

  return (
    <div className={styles.page} data-condition={backgroundKey} data-hover-effect={hoverEffect ?? ''}>
      <div className={styles.backdrop} aria-hidden="true">
        {showCloudField ? (
          <CloudField />
        ) : (
          <Icon name={heroIconName} className={styles.backdropIcon} />
        )}
        {hoverEffect === 'rain' && <RainEffect />}
        <div className={styles.horizonLine} />
        <div className={styles.sunriseSun} />
        <div className={styles.sunsetSun} />
      </div>
      <div className={styles.lightOverlay} aria-hidden="true" />

      {/* Filtro de brilho aplicado só ao conteúdo legível (não ao .backdrop
          fixed) — num fundo já quase preto, escurecer via blend mode não tem
          margem visual; brightness()/saturate() no texto/cards funciona nos
          dois sentidos (clarear no nascer do sol, escurecer no pôr do sol). */}
      <div className={styles.contentWrap}>
        <header className={styles.header}>
          <div className="container">
            <Link to="/#projects" className={styles.back}>
              <span aria-hidden="true">←</span> {weatherText.back}
            </Link>
          </div>
        </header>

        <main className={`container ${styles.main}`}>
          {status === 'loading' && <p className={styles.statusPanel}>{weatherText.loading}</p>}

          {status === 'error' && (
            <div className={styles.statusPanel}>
              <p>{weatherText.error}</p>
              <button type="button" className={styles.retryBtn} onClick={load}>
                {weatherText.retry}
              </button>
            </div>
          )}

          {status === 'ready' && snapshot && (
            <>
              <section className={styles.hero}>
                <Icon name={heroIconName} className={styles.heroIcon} />
                <div className={styles.heroInfo}>
                  <p className={styles.kicker}>{weatherText.kicker}</p>
                  <h1 className={styles.location}>{weatherText.location}</h1>
                  <p className={styles.temperature}>{Math.round(snapshot.current.temperatureC)}°</p>
                  <p className={styles.condition}>{weatherText.conditions[condition]}</p>
                  <p className={styles.updated}>
                    {weatherText.updatedAt(timeFormatter.format(new Date(snapshot.current.time)))}
                  </p>
                </div>
              </section>

              <section className={styles.statsGrid} aria-label={weatherText.statsLabel}>
                <StatTile
                  icon="thermometer"
                  label={weatherText.stats.feelsLike}
                  value={`${Math.round(snapshot.current.apparentTemperatureC)}°`}
                />
                <StatTile
                  icon="drop"
                  label={weatherText.stats.humidity}
                  value={`${snapshot.current.humidityPct}%`}
                />
                <StatTile
                  icon="wind"
                  label={weatherText.stats.wind}
                  value={`${Math.round(snapshot.current.windSpeedKmh)} km/h`}
                />
                <StatTile
                  icon="drop"
                  label={weatherText.stats.rainChance}
                  value={`${snapshot.daily[0].precipitationProbabilityPct}%`}
                  effect="rain"
                  onHoverEffect={setHoverEffect}
                />
                <StatTile
                  icon="uv"
                  label={weatherText.stats.uvIndex}
                  value={Math.round(snapshot.daily[0].uvIndexMax)}
                />
                <StatTile
                  icon="sunrise"
                  label={weatherText.stats.sunrise}
                  value={timeFormatter.format(new Date(snapshot.daily[0].sunrise))}
                  effect="sunrise"
                  onHoverEffect={setHoverEffect}
                />
                <StatTile
                  icon="sunset"
                  label={weatherText.stats.sunset}
                  value={timeFormatter.format(new Date(snapshot.daily[0].sunset))}
                  effect="sunset"
                  onHoverEffect={setHoverEffect}
                />
              </section>

              <section className={styles.forecast}>
                <h2 className={styles.forecastHeading}>{weatherText.forecastHeading}</h2>
                <div className={styles.forecastStrip}>
                  {snapshot.daily.map((day, index) => {
                    const dayCondition = resolveWeatherCondition(day.weatherCode);
                    return (
                      <div key={day.date} className={styles.forecastCard}>
                        <span className={styles.forecastDay}>
                          {index === 0 ? weatherText.today : dayFormatter.format(parseCalendarDate(day.date))}
                        </span>
                        <Icon
                          name={resolveConditionIcon(dayCondition, true)}
                          className={styles.forecastIcon}
                        />
                        <span className={styles.forecastTemps}>
                          <strong>{Math.round(day.tempMaxC)}°</strong> {Math.round(day.tempMinC)}°
                        </span>
                        <span className={styles.forecastRain}>{day.precipitationProbabilityPct}%</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          )}

          <p className={styles.sourceNote}>
            {weatherText.poweredBy}{' '}
            <a href="https://open-meteo.com" target="_blank" rel="noreferrer">
              Open-Meteo
            </a>
            {' · '}
            <a href={BOT_REPO_URL} target="_blank" rel="noreferrer">
              {weatherText.viewBotCode}
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}

const CLOUD_COUNT = 5;

// Várias nuvens (tamanho/altura/opacidade/velocidade aleatórios, gerados uma
// vez no mount) cruzando a tela da esquerda pra direita em loop — o "fluxo
// normal" pedido, bem mais lento que qualquer outra animação da página
// porque nuvem de verdade não corre. animationDelay negativo = fração do
// próprio ciclo, então já nascem espalhadas pelo céu, não empilhadas na borda.
function CloudField() {
  const clouds = useMemo(
    () =>
      Array.from({ length: CLOUD_COUNT }, (_, index) => {
        const duration = 55 + Math.random() * 55;
        return {
          id: index,
          size: 200 + Math.random() * 260,
          top: 4 + Math.random() * 46,
          opacity: 0.2 + Math.random() * 0.18,
          blur: 1 + Math.random() * 3,
          duration,
          delay: -(Math.random() * duration),
        };
      }),
    [],
  );

  return (
    <div className={styles.cloudField}>
      {clouds.map((cloud) => (
        <Icon
          key={cloud.id}
          name="cloud"
          className={styles.driftingCloud}
          style={{
            width: cloud.size,
            height: cloud.size,
            top: `${cloud.top}%`,
            opacity: cloud.opacity,
            filter: `blur(${cloud.blur}px)`,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

const RAINDROP_COUNT = 46;

// Gotas individuais (posição/duração/opacidade aleatórias, geradas uma vez no
// mount) em vez de uma textura repetida — lê muito mais como chuva de verdade
// caindo do que um padrão uniforme se movendo em bloco.
function RainEffect() {
  const drops = useMemo(
    () =>
      Array.from({ length: RAINDROP_COUNT }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        length: 16 + Math.random() * 28,
        duration: 0.45 + Math.random() * 0.55,
        delay: -(Math.random() * 1.2),
        opacity: 0.35 + Math.random() * 0.45,
        bright: Math.random() < 0.15,
      })),
    [],
  );

  return (
    <div className={styles.rainField}>
      {drops.map((drop) => (
        <span
          key={drop.id}
          className={`${styles.raindrop} ${drop.bright ? styles.raindropBright : ''}`}
          style={{
            left: `${drop.left}%`,
            height: `${drop.length}px`,
            opacity: drop.opacity,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function StatTile({ icon, label, value, effect, onHoverEffect }) {
  return (
    <div
      className={styles.statTile}
      onMouseEnter={effect ? () => onHoverEffect(effect) : undefined}
      onMouseLeave={effect ? () => onHoverEffect(null) : undefined}
    >
      <Icon name={icon} className={styles.statIcon} />
      <div className={styles.statText}>
        <span className={styles.statValue}>{value}</span>
        <span className={styles.statLabel}>{label}</span>
      </div>
    </div>
  );
}
