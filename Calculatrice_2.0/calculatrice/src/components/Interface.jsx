import './Interface.css';
import Result from './Result';
import Button from './Button';

const Interface = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='interface'>
      <div>
        <Result />
      </div>
      <div className='row2'>
        <div className='numbers'>
          {numbers.map((num, i) => (
            <Button
              key={i}
              name={num.toString()}
              type="number"
              handleClick={() => {}}
            />
          ))}
        </div>
        <div className='operators'>
          <Button name={'×'} handleClick={() => {}} type={'operator'} />
          <Button name={'+'} handleClick={() => {}} type={'operator'} />
          <Button name={'-'} handleClick={() => {}} type={'operator'} />
        </div>
      </div>
      <div className='row3'>
        <Button name={'='} handleClick={() => {}} type={'operator'} />
        <Button name={'C'} handleClick={() => {}} type={'reset'} />
      </div>
    </div>
  );
};

export default Interface;
