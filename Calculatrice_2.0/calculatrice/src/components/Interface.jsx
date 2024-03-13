import './Interface.css';
import Result from './Result';
import Button from './Button';
import { useReducer } from 'react';
import calculatorReducer, { initialState, ACTIONS } from '../reducers/calculatorReducer';
const Interface = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='interface'>
      <div>
        <Result result={state.current}/>
      </div>
      <div className='row2'>
        <div className='numbers'>
          {numbers.map((num, i) => (
            <Button
              key={i}
              name={num.toString()}
              type="number"
              handleClick={() => dispatch({type: ACTIONS.CHANGE_CURRENT, payload: num})}
            />
          ))}
        </div>
        <div className='operators'>
          <Button name={'×'} handleClick={() => dispatch({type: ACTIONS.SET_OPERATOR, payload: '×'})} type={'operator'} />
          <Button name={'+'} handleClick={() => dispatch({type: ACTIONS.SET_OPERATOR, payload: '+'})} type={'operator'} />
          <Button name={'-'} handleClick={() => dispatch({type: ACTIONS.SET_OPERATOR, payload: '-'})} type={'operator'} />
        </div>
      </div>
      <div className='row3'>
        <Button name={'='} handleClick={() => dispatch({type: ACTIONS.CALCULATE})} type={'operator'} />
        <Button name={'C'} handleClick={() => dispatch({type: ACTIONS.RESET})} type={'reset'} />
      </div>
    </div>
  );
};

export default Interface;
