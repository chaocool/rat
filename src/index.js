import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <div>
        <h1>hello , world , react init !</h1>
        <p>我能被插入到 #root 里面么? </p>
        <p>你看到了,显然是可以的哇</p>
    </div>,
  document.getElementById('root')
);
