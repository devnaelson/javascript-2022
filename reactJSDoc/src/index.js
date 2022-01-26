import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Global from './global';
import reportWebVitals from './reportWebVitals';

import * as sn from './globalsnp';
<sn.GlobalSnippets />
let element = <sn.funcComponentsPros />;

/* bring to on here in main why turn more simple of use and logic sense*/
ReactDOM.render(
  element,
  document.getElementById('snp-compprop')
);

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
