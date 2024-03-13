import ListItem from './ListItem';

const List = ({ heading, items, dispatch }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default List;
