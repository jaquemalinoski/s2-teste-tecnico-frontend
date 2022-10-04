import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.sass'
import { SimulationProvider } from '../src/providers/simulation'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SimulationProvider>
      <App />
    </SimulationProvider>
  </React.StrictMode>
)