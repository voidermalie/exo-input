import axios from 'axios';


const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units={metric}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

export default fetchWeather;