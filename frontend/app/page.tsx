'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherInformation from '@/components/WeatherInformation';
import WindHumidity from '@/components/WindHumidity';
import Forecast from '@/components/Forecast';

export default function Home() {
  const [weather, setWeather] = useState<any>(null); // Replace `any` with a proper type later
  const [forecast, setForecast] = useState<any[]>([]);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async (location: string) => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    setWeather(null); // clear previous data
    setForecast([]);  // clear previous data
  
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`
      );
      const data = await res.json();
  
      if (data.cod !== 200) {
        throw new Error(data.message || "Weather not found");
      }
  
      setWeather(data);
  
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`
      );
      if (!apiKey) {
        alert("Missing API key. Please check your .env.local file.");
        return;
      }
      
      const forecastData = await resForecast.json();
  
      if (!forecastData.list) {
        throw new Error("Forecast data not available");
      }
  
      setForecast(forecastData.list.slice(0, 5));
    } catch (err: any) {
      console.error("Error fetching data:", err.message);
      alert("Error: " + err.message);
    }
  };
  

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <SearchBar onSearch={fetchWeather} onToggleUnit={toggleUnit} />

      {weather?.main && weather?.weather && (
  <>
    <WeatherInformation
      city={weather.name}
      temperature={weather.main.temp}
      description={weather.weather[0].description}
      icon={weather.weather[0].icon}
      unit={unit}
    />
    <WindHumidity
      humidity={weather.main.humidity}
      windSpeed={weather.wind.speed}
      unit={unit}
    />
  </>
)}



      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </main>
  );
}
