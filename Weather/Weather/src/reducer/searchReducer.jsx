import { useReducer } from 'react';

export const initialState = {
  city: '',
  weatherData: null,
};

export const ACTIONS = {
  SET_CITY: 'SET_CITY',
  SET_WEATHER_DATA: 'SET_WEATHER_DATA',
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ACTIONS.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
