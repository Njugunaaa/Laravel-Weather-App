type ForecastEntry = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

type ForecastDisplayProps = {
  forecast: ForecastEntry[];
  unit: 'metric' | 'imperial';
};

export default function ForecastDisplay({ forecast, unit }: ForecastDisplayProps) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  // Filter for 12:00 PM entries (noon)
  const dailyForecast = forecast
    .filter((entry) => entry.dt_txt.includes("12:00:00"))
    .slice(0, 3);

  return (
    <div className="col-span-1 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4 text-center">3-Day Forecast</h3>
      <div className="flex justify-between gap-4">
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded text-center w-full"
            >
              <p className="font-semibold">{dayName}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon"
                className="mx-auto"
              />
              <p className="text-sm">
                {Math.round(day.main.temp)}
                {tempUnit}
              </p>
              <p className="text-xs capitalize">
                {day.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
