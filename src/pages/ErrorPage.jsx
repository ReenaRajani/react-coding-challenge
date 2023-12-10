import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  if (error) {
    console.error(error);
  }

  return (
    <div id="error-page">
      <h1> Oops! </h1>
      <p> Something went wrong...</p>
    </div>
  );
};
