import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { Movies } from "./pages/Movies";
import { Login } from "./pages/Login";
import { ErrorPage } from "./pages/ErrorPage";
import { LoadingPage } from "./pages/LoadingPage";

import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/loading",
        element: <LoadingPage />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
