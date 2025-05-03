'use client';

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import WeatherInformation from '@/components/WeatherInformation'
import WindHumidity from '@/components/WindHumidity'
import Forecast from '@/components/Forecast'

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

      if (!res.ok || !data || !data.main) {
        throw new Error(data.message || 'Weather data not available');
      }

      setWeather(data);

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&appid=${apiKey}`
      );
      const forecastData = await resForecast.json();

      if (!resForecast.ok || !forecastData || !forecastData.list) {
        throw new Error(forecastData.message || 'Forecast data not available');
      }

      // Optional: filter only 3 noons for the next days
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
    if (searchQuery.trim() !== '') {
      fetchWeather(searchQuery);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  {/* Search Bar */}
  <SearchBar
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    handleSearch={handleSearch}
    toggleUnit={toggleUnit}
    unit={unit}
  />

  {/* Main Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {/* LEFT: Current Weather */}
    {weather && <WeatherInformation weather={weather} unit={unit} />}

    {/* CENTER: Forecast */}
    {forecast.length > 0 && <Forecast forecast={forecast} unit={unit} />}

    {/* RIGHT: Wind + Humidity */}
    {weather && (
      <div className="bg-white p-4 rounded shadow flex flex-col gap-4">
        <WindHumidity
          windSpeed={weather.wind.speed}
          windDeg={weather.wind.deg}
          humidity={weather.main.humidity}
          unit={unit}
        />
      </div>
    )}
  </div>
</div>
  );
}
