import React from 'react';
import './assets/css/index.css';
import './assets/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Home</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}>

                <Link to="/AddUser">Add USer</Link> | {" "}
                <Link to="/EditUser">Edit USer</Link> | {" "}
                <Link to="/invoices/1999">Params</Link> | {" "}
                <Link to="/Contact">Contact</Link> | {" "}
            </nav>
        </div>
    );
}