import React from "react";
import { Link } from "react-router-dom";

import { COMPANY_TITLE } from "../constants";

import "./Navbar.css";

export const Navbar = () => (
  <nav className="top-navbar">
    <Link to="/" className="nav-title">
      {COMPANY_TITLE}
    </Link>
    <ul>
      <li>
        <Link to="/log-in">Log In</Link>
      </li>
      <li>
        <button>Start your free trial</button>
      </li>
    </ul>
  </nav>
);
