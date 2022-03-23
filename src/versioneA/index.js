import React from 'react';
import ReactDOM from 'react-dom';
//
import './style/index.css';
//
import Home from './components/Home';
import Lib from './components/Lib';
//
import reportWebVitals from './reportWebVitals';
//tutti gli svg sono presi da FontAwesome
//ho provato a implementare l'api di Fontawesome
//ma non ci sono riuscito perciò ho optato per le path svg

ReactDOM.render(
  <React.StrictMode>
    <div className='home'>
      <Lib></Lib>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
