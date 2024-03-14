import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  const temperatureCelsius = weatherData.main.temp - 273.15;

  return (
    <div className="weather-display">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {Math.round(temperatureCelsius)} °C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
