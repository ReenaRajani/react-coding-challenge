import React from "react";

import { TitleBar } from "../components/Titlebar";
import { Tile } from "../components/Tile";

import { PAGE_TITLE } from "../constants";

import "./Home.css";

export const Home = () => (
  <>
    <TitleBar title={PAGE_TITLE} />
    <div className="content">
      <Tile title="SERIES" content="Popular Series" />
      <Tile title="MOVIES" content="Popular Movies" />
    </div>
  </>
);
