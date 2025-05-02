interface WindHumidityProps {
  humidity: number;
  windSpeed: number;
  unit: string;
}

export default function WindHumidity({
  humidity,
  windSpeed,
  unit,
}: WindHumidityProps) {
  return (
    <div className="bg-white p-4 rounded shadow grid grid-cols-2 gap-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Humidity</h3>
        <p className="text-xl">{humidity}%</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">Wind Speed</h3>
        <p className="text-xl">
          {windSpeed} {unit === 'metric' ? 'm/s' : 'mph'}
        </p>
      </div>
    </div>
  );
}
