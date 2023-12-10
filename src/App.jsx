import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => (
  <>
    <Navbar />
    <div className="app-container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default App;
