import React from 'react';
import './assets/css/index.css';
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Pincipal</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/Contact">Contact</Link> |{" "}
                <Link to="/AddUser">Add USer</Link>
                <Link to="/EditUser">Edit USer</Link>
                <Link to="/invoices/1999">Params</Link>
            </nav>
        </div>
    );
}