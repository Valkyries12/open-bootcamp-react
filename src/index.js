import React from 'react';
import ReactDOM from 'react-dom/client';
// añadimos bootstrap a nuestro projecto 
import "bootstrap/dist/css/bootstrap.css"
// ! importante: los estilos propios deben ir debjo de bootstrap pra que no nos pisemos
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
