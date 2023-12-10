import React from "react";
import PropTypes from "prop-types";

import { TitleBar } from "./Titlebar";

import "./ContentList.css";

export const ContentList = ({ title, items }) => (
  <div>
    <TitleBar title={title} />
    <div className="content-list-container">
      {items.map((item) => (
        <div key={item.title} className="content-list-item">
          <img src={item.images["Poster Art"].url} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

ContentList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.shape({
        posterArt: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }),
      }),
    }),
  ).isRequired,
};

export default ContentList;
