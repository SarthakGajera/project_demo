import React, { useEffect, useState } from 'react';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Vadodara'); // Set default city to Vadodara
  const apiKey = '287aae7b06489b2d763e76197bf0a807'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    // Fetch Weather Data for Vadodara
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          console.error('Error fetching weather data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]); // Runs when city or apiKey changes

  return (
    <div className="weather-container p-4">
      <h2 className="text-2xl font-bold mb-4">Weather Information for Vadodara</h2>
      
      {/* Weather Data Display */}
      {weatherData && weatherData.main ? (
        <div className="weather-info">
          <h3 className="text-xl font-semibold">Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}

      {/* Input for Changing City */}
      <div className="mt-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border p-2 rounded w-full max-w-xs"
        />
      </div>
    </div>
  );
}
