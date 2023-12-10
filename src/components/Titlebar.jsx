import React from "react";
import PropTypes from "prop-types";

import "./Titlebar.css";

export const TitleBar = ({ title }) => {
  return <div className="title-bar">{title} </div>;
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
