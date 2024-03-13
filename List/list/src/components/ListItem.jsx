import Button from './Button';
import { ACTIONS } from '../reducers/listReducer';

const ListItem = ({ item, dispatch }) => {
  const handleRemove = () => {
    dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: item.id,
    });
  };

  return (
    <>
    <li>
        {item.text}
    <Button name="X" onClick={handleRemove} type='delete' />
    </li>
    </>
  );
};

export default ListItem;
