import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ContextPorfolioProvider } from './Context/ContextPorfolio.jsx';

const rootContainer = document.getElementById('root');

const root = createRoot(rootContainer);
root.render(
  <ContextPorfolioProvider>
      <App />
  </ContextPorfolioProvider>
);
