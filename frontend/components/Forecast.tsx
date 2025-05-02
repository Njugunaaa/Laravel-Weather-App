// components/Forecast.tsx
type ForecastProps = {
  forecast: any[]; // Replace `any` with a proper forecast item type if you want
};

export default function Forecast({ forecast }: ForecastProps) {
  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((item, index) => (
          <div key={index} className="text-center">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="mx-auto"
            />
            <p>{item.main.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
