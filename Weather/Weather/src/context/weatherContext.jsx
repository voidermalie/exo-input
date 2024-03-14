import { useContext, createContext, useReducer } from 'react';
import searchReducer, { initialState, ACTIONS } from '../reducer/searchReducer';

const weatherContext = createContext();

const WeatherConsumer = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return [state, dispatch];
};

export const useWeatherContext = () => {
  return useContext(weatherContext);
};

const WeatherContextProvider = ({ children }) => {
  const value = WeatherConsumer();

  return (
    <weatherContext.Provider value={value}>{children}</weatherContext.Provider>
  );
};

export default WeatherContextProvider;
