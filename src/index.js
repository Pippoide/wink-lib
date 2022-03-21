import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
//
import Home from './components/Home';
import Lib from './components/Lib';
//
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='home'>
      <Home></Home>
      <Lib></Lib>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
