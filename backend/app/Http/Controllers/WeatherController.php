<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        $city = $request->query('city');
        $units = $request->query('units', 'metric'); // default: Celsius

        if (!$city) {
            return response()->json(['error' => 'City name is required'], 400);
        }

        $apiKey = env('OPENWEATHERMAP_API_KEY');
        $url = 'https://api.openweathermap.org/data/2.5/forecast';

        $response = Http::get($url, [
            'q' => $city,
            'units' => $units,
            'appid' => $apiKey,
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to get weather data'], 500);
        }

        return response()->json($response->json());
    }
}
