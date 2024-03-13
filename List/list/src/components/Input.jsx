import Button from './Button';
import { ACTIONS } from '../reducers/listReducer';
import { useState } from 'react';

const Input = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
      dispatch({ type: ACTIONS.ADD_ITEM, payload: text });
      setText('');
  };

  return (
    <div>
      <input
        type={'text'}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button name="Add" onClick={handleSubmit} />
    </div>
  );
};

export default Input;
