import './App.css';
import List from './components/List';
import Input from './components/Input';
import { useReducer } from 'react';
import listReducer, { initialState } from './reducers/listReducer';

function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <>
      <Input dispatch={dispatch}/>
      <List heading='List' items={state.items} dispatch={dispatch} />
    </>
  );
}

export default App;
