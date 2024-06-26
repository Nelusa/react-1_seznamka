/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

createRoot(
    document.querySelector('#app'),
).render(<HomePage />);

