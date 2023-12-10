import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Tile.css";

export const Tile = ({ title, content }) => (
  <div className="tile-container">
    <Link to={`/${title.toLowerCase()}`} className="tile-image">
      <img src="assets/placeholder.png" alt={title} className="tile-image" />
      <div className="tile-text">{title}</div>
    </Link>
    <div className="tile-content">{content}</div>
  </div>
);

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
