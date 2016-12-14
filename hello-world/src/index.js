import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App text="a text string" cat={5} />,
  document.getElementById('root')
);
