import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#ff5bb7' }}>
        <Header />
        <Title title={'Share your thoughts'} />
        <div className='input_wrapper'></div>
        <Title title={"What's hannening?"} />
      </div>
    </>
  );
}

export default App;
