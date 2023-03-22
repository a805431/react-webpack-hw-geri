import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FarmsContext from './context/farms';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <FarmsContext.Provider value={5}>
    <App />
  </FarmsContext.Provider>
);
