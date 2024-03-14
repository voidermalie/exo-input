import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PostContextProvider from './contexts/postContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
