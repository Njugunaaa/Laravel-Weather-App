# 🌤️ Laravel Weather App

A simple and responsive weather application built with Laravel and Tailwind CSS. It fetches real-time weather data and forecasts from the OpenWeatherMap API and displays temperature, wind, humidity, and a 3-day forecast.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ View current weather conditions
- 🌦️ Get a 3-day forecast at 12:00 PM
- 🌬️ View wind speed and humidity
- 🔁 Switch between Celsius (°C) and Fahrenheit (°F)
- 📱 Fully responsive layout using Tailwind CSS

---

## 🧰 Technologies Used

- PHP 8+
- [Laravel 11](https://laravel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/)
- Composer
- (Optional) SQLite / MySQL

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/laravel-weather-app.git
   cd laravel-weather-app
Install PHP dependencies

bash
Copy
Edit
composer install
Copy and configure the environment file

bash
Copy
Edit
cp .env.example .env
php artisan key:generate
Add your OpenWeatherMap API key to .env

ini
Copy
Edit
WEATHER_API_KEY=your_api_key_here
Serve the application

bash
Copy
Edit
php artisan serve
Visit: http://localhost:8000

🌐 Deployment
⚠️ Laravel apps are not compatible with GitHub Pages or Vercel by default because they require a server with PHP support.

To deploy your Laravel app, consider:

Render

Laravel Forge

DigitalOcean

Shared hosting with PHP 8+ support

Make sure your server’s web root points to the /public directory.

📂 Folder Structure Overview
bash
Copy
Edit
## laravel-weather-app/
│
├── app/               # Laravel backend logic
├── public/            # Public assets and entry point (index.php)
├── resources/         # Views and Tailwind-styled UI
├── routes/            # Web route definitions
├── .env               # Your environment variables (not committed)
├── composer.json      # PHP dependencies
└── tailwind.config.js # Tailwind customization
🧪 Example .env File
env
Copy
Edit
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

WEATHER_API_KEY=your_openweathermap_api_key_here
🤝 Contributing
Pull requests are welcome! Please open an issue for significant changes first.

Fork the repo

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a pull request

## 📄 License
MIT License

sql
Copy
Edit
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
📧 Contact
For questions, ideas, or issues, please open a GitHub Issue or reach out via email.

Happy coding! 🎉

yaml
Copy
Edit

---

Let me know if you'd like this customized with your actual GitHub username or any links/logos added.