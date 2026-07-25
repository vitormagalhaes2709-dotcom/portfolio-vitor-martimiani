const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

const CURRENT_FIELDS = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'precipitation',
  'weather_code',
  'wind_speed_10m',
  'is_day',
].join(',');

const DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_probability_max',
  'uv_index_max',
  'sunrise',
  'sunset',
].join(',');

/**
 * Mesma API pública usada pelo bot-alertas-climaticos (Open-Meteo, sem API key
 * — ver bot-alertas-climaticos/src/weatherClient.js). Aqui pedimos campos extras
 * (umidade, sensação térmica, UV, nascer/pôr do sol) pra compor um painel mais
 * completo do que o bot precisa para os próprios alertas.
 */
export async function fetchWeatherSnapshot({ latitude, longitude, forecastDays = 8 }) {
  const url = new URL(BASE_URL);
  url.searchParams.set('latitude', latitude);
  url.searchParams.set('longitude', longitude);
  url.searchParams.set('current', CURRENT_FIELDS);
  url.searchParams.set('daily', DAILY_FIELDS);
  url.searchParams.set('forecast_days', String(forecastDays));
  url.searchParams.set('timezone', 'auto');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Open-Meteo respondeu ${response.status}`);
  }

  const data = await response.json();

  return {
    current: {
      time: data.current.time,
      temperatureC: data.current.temperature_2m,
      apparentTemperatureC: data.current.apparent_temperature,
      humidityPct: data.current.relative_humidity_2m,
      precipitationMm: data.current.precipitation,
      weatherCode: data.current.weather_code,
      windSpeedKmh: data.current.wind_speed_10m,
      isDay: data.current.is_day === 1,
    },
    daily: data.daily.time.map((date, index) => ({
      date,
      weatherCode: data.daily.weather_code[index],
      tempMaxC: data.daily.temperature_2m_max[index],
      tempMinC: data.daily.temperature_2m_min[index],
      precipitationProbabilityPct: data.daily.precipitation_probability_max[index],
      uvIndexMax: data.daily.uv_index_max[index],
      sunrise: data.daily.sunrise[index],
      sunset: data.daily.sunset[index],
    })),
  };
}
