interface WeatherInfoProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  unit: string;
}

export default function WeatherInformation({
  city,
  temperature,
  description,
  icon,
  unit,
}: WeatherInfoProps) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="bg-blue-100 p-4 rounded shadow text-center mb-4">
      <h2 className="text-2xl font-bold">{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p className="text-xl">{description}</p>
      <p className="text-3xl font-bold">
        {temperature}
        {tempUnit}
      </p>
    </div>
  );
}
