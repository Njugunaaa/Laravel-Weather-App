'use client';

import { useState } from 'react'
import WeatherInformation from '@/components/WeatherInformation'
import WindHumidity from '@/components/WindHumidity'
import Forecast from '@/components/Forecast'
import './globals.css'
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async (location: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`
      );
      const data = await res.json();
      if (!res.ok || !data || !data.main) throw new Error(data.message);
      setWeather(data);

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&appid=${apiKey}`
      );
      const forecastData = await resForecast.json();
      if (!resForecast.ok || !forecastData || !forecastData.list)
        throw new Error(forecastData.message);
      const dailyNoons = forecastData.list.filter((entry: any) =>
        entry.dt_txt.includes('12:00:00')
      ).slice(0, 3);
      setForecast(dailyNoons);
    } catch (err: any) {
      console.error('Error fetching data:', err.message);
      alert('Error: ' + err.message);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') fetchWeather(searchQuery);
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    
      <div className="min-h-screen bg-gray-100 p-6">
        {/* <div className="min-h-screen bg-blue-500 text-white flex items-center justify-center">
          <h1 className="text-3xl font-bold">Tailwind is Working!</h1>
        </div> */}
        <div className="max-w-6xl mx-auto">
          {/* Search Bar (A, B, C) */}
          <div className="flex items-center gap-2 mb-6">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city..."
              className="border rounded px-3 py-2 w-64"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
            <button onClick={toggleUnit} className="border px-3 py-2 rounded">
              {unit === 'metric' ? '°F' : '°C'}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Weather (D, E, F, G) - Span across all columns on small screens, 2 on medium+ */}
            {weather && (
              <div className="bg-white p-4 rounded shadow md:col-span-2">
                <WeatherInformation weather={weather} unit={unit} />
              </div>
            )}

            {/* Forecast (H) - Span across all columns */}
            {forecast.length > 0 && (
              <div className="bg-white p-4 rounded shadow">
                <Forecast forecast={forecast} unit={unit} />
              </div>
            )}

            {/* Wind & Humidity (I, J) - Stack on small screens, side-by-side on medium+ */}
            {weather && (
              <div className="bg-white p-4 rounded shadow md:row-start-2 md:col-start-3 md:col-span-1 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <WindHumidity
                    windSpeed={weather.wind.speed}
                    windDeg={weather.wind.deg}
                    humidity={weather.main.humidity}
                    unit={unit}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    
  )
}