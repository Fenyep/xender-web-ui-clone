import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

// Fonts import
import './fonts/Poppins/Poppins-Light.ttf';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Medium.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


