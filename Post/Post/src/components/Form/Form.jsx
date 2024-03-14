import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { usePostContext } from '../../contexts/postContext';
import { ACTIONS } from '../../reducers/postReducer';

const Form = () => {
  const [state, dispatch] = usePostContext();
  const { title, content, error } = state;

  const handleSubmit = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      dispatch({ type: ACTIONS.ADD_POST, payload: {} });
    } else {
      dispatch({
        type: ACTIONS.ADD_ERROR,
        payload: 'Please fill in both fields',
      });
    }
  };
  return (
    <div className="input-wrapper">
      {error !== '' && <span style={{ color: 'red' }}>{error}</span>}
      <Input placeholder={'title'} type={'title'} />
      <Input placeholder={'write your content here...'} type={'content'} />
      <Button name={'Partager'} type={'partager'} onClick={handleSubmit} />
    </div>
  );
};

export default Form;
