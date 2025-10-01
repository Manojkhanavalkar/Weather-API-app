# Weather API App

A simple web app that shows current weather data for a city using OpenWeatherMap + WeatherAPI.

## Features

- Enter any city name and fetch weather data  
- Uses the OpenWeather geocoding API to convert city → latitude/longitude  
- Uses OpenWeather current weather API to fetch weather by coordinates  
- Basic UI to display city name, temperature, weather description, and errors  

## Demo / Screenshots

*(You can insert screenshots here if you have them)*

## Installation / Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/Manojkhanavalkar/Weather-API-app.git
   cd Weather-API-app ```
   
#Add your API keys
In script.js, replace the placeholders:

---

## js
--
Copy code
const API_KEY = "<YOUR_WEATHERAPI_KEY>";
const API_KEY2 = "<YOUR_OPENWEATHERMAP_KEY>";
Serve the app
You can simply open index.html in your browser, or use a local server (e.g. live-server, http-server) for better behavior.

---

## Usage
Enter a city name (e.g. “Pune”)

Click Get Weather

The app will:

Call geocoding API to get lat, lon

Call OpenWeather current weather API to get weather data

Display the weather (temperature, description, etc.)

---

## Code Overview
index.html — structure & UI

style.css — styling

script.js — logic:

fetchWeatherData(city) handles the two API calls

displayWeatherData(weatherData) displays results

showError() handles and displays errors

---

### Notes & Troubleshooting
Make sure your API keys are valid and have proper access

The free plan on OpenWeather does not support the One Call 3.0 (you must use /data/2.5/weather)

The geocoding API returns an array: always pick data[0]

Handle cases where city is not found or APIs return errors

## Future Improvements
Add forecast support (e.g. next 5 days)

Add loading spinner / better UI feedback

Input validation (e.g. non-alphabetic characters)

Improve error messages (e.g. “city not found”, “network error”)

Use environment variables instead of hardcoding API keys

---
License
MIT License © Manoj Khanavalkar
