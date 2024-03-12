import { useReducer } from 'react';

const initialState = {
  result: 0,
  num1: 0,
  num2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_value':
      return {
        ...state,
        [action.name]: action.value
      };

    case 'add':
      return {
        ...state,
        result: state.num1 + state.num2,
      };

    case 'multiply':
      return {
        ...state,
        result: state.num1 * state.num2,
      };

    case 'reset':
      return initialState;

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'set_value', name, value: parseFloat(value) });
  };

  const add = () => {
    dispatch({ type: 'add' });
  };
  const multiply = () => {
    dispatch({ type: 'multiply' });
  };
  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <div>Résultat : {state.result}</div>
      <div>
        <input
          type={'text'}
          value={state.num1}
          placeholder={'First number'}
          name={'num1'}
          onChange={handleChange}
        ></input>
        <input
          type={'text'}
          value={state.num2}
          placeholder={'Second number'}
          name={'num2'}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={multiply}>*</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Calculator;
