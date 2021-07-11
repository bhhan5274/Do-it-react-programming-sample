import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CoinApp from './CoinApp';

// eslint-disable-next-line @typescript-eslint/no-empty-function
console.warn = () => {};
// eslint-disable-next-line @typescript-eslint/no-empty-function
console.error = () => {};

ReactDOM.render(
  <React.StrictMode>
    <CoinApp />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
