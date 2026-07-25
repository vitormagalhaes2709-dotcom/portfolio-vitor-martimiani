// Códigos WMO (padrão Open-Meteo) agrupados nas poucas categorias visuais que a
// página de clima precisa para escolher ícone/fundo — não tentamos diferenciar
// cada variação (ex.: chuva fraca vs. forte usam a mesma categoria "rain").
// Mesma referência usada em bot-alertas-climaticos/src/alertRules.js.
const STORM_CODES = new Set([95, 96, 99]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]);
const FOG_CODES = new Set([45, 48]);

export function resolveWeatherCondition(weatherCode) {
  if (STORM_CODES.has(weatherCode)) return 'storm';
  if (SNOW_CODES.has(weatherCode)) return 'snow';
  if (RAIN_CODES.has(weatherCode)) return 'rain';
  if (FOG_CODES.has(weatherCode)) return 'fog';
  if (weatherCode === 3) return 'cloudy';
  if (weatherCode === 1 || weatherCode === 2) return 'partly-cloudy';
  return 'clear'; // weatherCode === 0
}

const ICON_BY_CONDITION = {
  clear: { day: 'sun', night: 'moon' },
  'partly-cloudy': { day: 'cloudSun', night: 'cloudMoon' },
  cloudy: { day: 'cloud', night: 'cloud' },
  fog: { day: 'fog', night: 'fog' },
  rain: { day: 'cloudRain', night: 'cloudRain' },
  storm: { day: 'cloudLightning', night: 'cloudLightning' },
  snow: { day: 'snow', night: 'snow' },
};

export function resolveConditionIcon(condition, isDay) {
  return ICON_BY_CONDITION[condition][isDay ? 'day' : 'night'];
}

// Só clear/partly-cloudy têm variante dia/noite distinta no fundo — as demais
// condições (chuva, neve, neblina, tempestade) não dependem do sol pra ler bem.
export function resolveBackgroundKey(condition, isDay) {
  if (condition === 'clear' || condition === 'partly-cloudy') {
    return `${condition}-${isDay ? 'day' : 'night'}`;
  }
  return condition;
}
