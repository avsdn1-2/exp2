import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {apptable} from './apptable.js';

apptable(60);

//выводим в консоль время начала рендеринга
let dateSt = new Date();
let timeStart = 'минута ' + dateSt.getMinutes() + ' ' + 'секунда ' + dateSt.getSeconds();
console.log(timeStart);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//выводим в консоль время завершения рендеринга
let dateFin = new Date();
let timeFinish = 'минута ' + dateFin.getMinutes() + ' ' + 'секунда ' + dateFin.getSeconds();
console.log(timeFinish);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
