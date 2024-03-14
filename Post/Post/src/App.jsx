import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#ff5bb7' }}>
        <Header />
        <Title title={'Share your thoughts'} />
        <Form />
        <Title title={"What's hannening?"} />
      </div>
    </>
  );
}

export default App;
