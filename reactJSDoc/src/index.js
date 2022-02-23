import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import Contact from './components/Contact';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import Invoices from './components/Invoices';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="AddUser" element={<AddUser />} />
      <Route path="EditUser" element={<EditUser />} />
      <Route path="invoices" element={<Invoices />}>
        <Route path=":id" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();