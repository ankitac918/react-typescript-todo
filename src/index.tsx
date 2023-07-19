import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { TodosProvider } from './store/todos';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodosProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </TodosProvider>
  </React.StrictMode>
);

reportWebVitals();
