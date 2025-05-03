export default function WindHumidity({ humidity, windSpeed, unit }: any) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex justify-around">
      <div className="text-center">
        <p className="text-lg font-semibold">Humidity</p>
        <p className="text-xl">{humidity}%</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">Wind</p>
        <p className="text-xl">
          {windSpeed} {unit === 'metric' ? 'm/s' : 'mph'}
        </p>
      </div>
    </div>
  );
}
