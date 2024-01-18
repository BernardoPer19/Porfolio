import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ContextPorfolioProvider } from './Context/ContextPorfolio.jsx';

ReactDOM.render(
  <ContextPorfolioProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextPorfolioProvider>,
  document.getElementById('root')
);
