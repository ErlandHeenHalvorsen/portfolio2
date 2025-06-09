// src/components/header/Header.jsx
import React from "react";
import { Link } from "react-router";
import "./header.css";

const Header = () => {
    return (
        <header className="site-header">
            <h1 className="site-title">
                <Link to="/" className="site-title-link">
                    Portfolio -
                </Link>
            </h1>
        </header>
    );
};

export default Header;
