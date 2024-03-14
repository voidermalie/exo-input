import './App.css';

import Header from './component/Header/Header';
import SearchBar from './component/Header/SearchBar/SearchBar';
import WeatherDisplay from './component/WeatherDisplay/WeatherDisplay';

import { useWeatherContext } from './context/weatherContext';
import { ACTIONS } from './reducer/searchReducer'
import fetchWeather from './api';

function App() {
  const [state, dispatch] = useWeatherContext();
  const handleSearch = async () => {
    try {
      const { city } = state;
      const weatherData = await fetchWeather(city);
      dispatch({ type: ACTIONS.SET_WEATHER_DATA, payload: weatherData });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header title={'Is it Nice ?'} />
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={state.weatherData} />
    </>
  );
}

export default App;
