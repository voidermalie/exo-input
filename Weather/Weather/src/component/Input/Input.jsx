import { useWeatherContext } from '../../context/weatherContext';
import { ACTIONS } from '../../reducer/searchReducer';

const Input = ({ onSubmit }) => {
  const [state, dispatch] = useWeatherContext();
  const { city } = state;

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.SET_CITY,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={city}
          placeholder="Enter city name"
          type={'text'}
          onSubmit={onSubmit}
        />
      </form>
    </>
  );
};

export default Input;
