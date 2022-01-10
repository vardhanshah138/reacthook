import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sample from './SampleHook';
import reportWebVitals from './reportWebVitals';


var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

ReactDOM.render(
  <Sample />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
