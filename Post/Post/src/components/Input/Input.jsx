import './Input.css';
import { usePostContext } from '../../contexts/postContext';
import { ACTIONS } from '../../reducers/postReducer'

const Input = ({ type, placeholder }) => {
  const [state, dispatch] = usePostContext();
  const { [type]: value } = state; // Use dynamic property access based on type

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: ACTIONS.CHANGE_VALUE,
      payload: {type, value},
    });
  };

  return (
    <div className="input_wrapper">
      <input
        onChange={handleChange}
        name={type}
        value={value}
        type={'text'}
        placeholder={type}
        label={placeholder}
      ></input>
    </div>
  );
};

export default Input;
