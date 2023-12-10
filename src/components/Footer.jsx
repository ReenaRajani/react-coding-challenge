import React from "react";

import { COMPANY_TITLE } from "../constants";
import "./Footer.css";

export const Footer = () => (
  <footer className="footer">
    <ul className="footer-nav-list">
      <li>
        {" "}
        <a href="/"> Home </a>
      </li>
      <li>
        {" "}
        <a href="/"> Terms and Conditions </a>{" "}
      </li>
      <li>
        {" "}
        <a href="/"> Privacy Policy </a>{" "}
      </li>
      <li>
        {" "}
        <a href="/"> Collection Statement </a>{" "}
      </li>
      <li>
        {" "}
        <a href="/"> Help </a>{" "}
      </li>
      <li>
        {" "}
        <a href="/"> Manage Account </a>{" "}
      </li>
    </ul>
    <p className="copyright-comment">
      {" "}
      `Copyright &copy; 2016 ${COMPANY_TITLE}. All Rights Reserved.`
    </p>
    <div className="socials">
      <ul className="media-icons">
        <li>
          {" "}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/social/facebook-white.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/social/twitter-white.svg" alt="Twitter" />{" "}
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https:/instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/social/instagram-white.svg" alt="Instagram" />
          </a>
        </li>
      </ul>

      <div className="download-store">
        <img src="assets/store/app-store.svg" alt="AppStore" />
        <img src="assets/store/play-store.svg" alt="PlayStore" />
        <img src="assets/store/windows-store.svg" alt="WindosStore" />
      </div>
    </div>
  </footer>
);
