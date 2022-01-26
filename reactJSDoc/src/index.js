import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Global from './global';
import reportWebVitals from './reportWebVitals';

import GlobalSnippets from './globalsnp';
<GlobalSnippets/>

ReactDOM.render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
