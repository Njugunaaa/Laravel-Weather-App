export default function WeatherInformation({
  city,
  temperature,
  description,
  icon,
  unit,
}: any) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold">{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />
      <p className="text-4xl font-bold">
        {Math.round(temperature)}°{unit === 'metric' ? 'C' : 'F'}
      </p>
      <p className="capitalize text-gray-500">{description}</p>
    </div>
  );
}
