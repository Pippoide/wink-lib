import React from 'react';
import ReactDOM from 'react-dom';
//
import './style/index.css';
//
import App from './components/app';
//
import reportWebVitals from './reportWebVitals';
//tutti gli svg sono presi da FontAwesome
//ho provato a implementare l'api di Fontawesome
//ma non ci sono riuscito perciò ho optato per le path svg

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
