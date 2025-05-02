interface WeatherDisplayProps {
  weather: {
    name: string;
    main: { temp: number; humidity: number };
    weather: { description: string; icon: string }[];
    wind: { speed: number };
  };
  unit: string;
}

export default function WeatherDisplay({ weather, unit }: WeatherDisplayProps) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="p-4 rounded bg-white shadow-md mb-4">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <div>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p>Temp: {weather.main.temp}{tempUnit}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
      </div>
    </div>
  );
}
