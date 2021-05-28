import logo from './logo.svg';
import './App.css';
import React from "react";
import { createPortal } from 'react-dom';
import {Block} from './block.js';

function App() {

    let sels = Array.from(document.querySelectorAll('td'));

    return (
          sels.map((el,key) => {
              return (<Block key = {key} item = {el} />)
          })
        );
}

export default App;
