interface WeatherDisplayProps {
  weather: {
    name: string;
    main: { temp: number; humidity: number };
    weather: { description: string; icon: string }[];
    wind: { speed: number, deg: number };
    dt: number; // UNIX timestamp
  };
  unit: string;
}

export default function WeatherDisplay({ weather, unit }: WeatherDisplayProps) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  const date = new Date(weather.dt * 1000); // Convert from UNIX time
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center text-center space-y-4 w-full md:w-1/3">
      {/* D: Weather icon */}
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather icon"
        className="w-32 h-32"
      />

      {/* E: Temperature */}
      <h1 className="text-4xl font-bold text-gray-800">
        {Math.round(weather.main.temp)}{tempUnit}
      </h1>

      {/* F: Weather description */}
      <p className="capitalize text-xl text-gray-600">
        {weather.weather[0].description}
      </p>

      {/* G: Date and Location */}
      <div className="text-sm text-gray-500 mt-4">
        <p>{formattedDate}</p>
        <p className="font-medium">{weather.name}</p>
      </div>
    </div>
  );
}
