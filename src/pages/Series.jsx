import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ContentList } from "../components/ContentList";
import { useContentData } from "../hooks/useContentData";
import { SERIES_TITLE } from "../constants";

export const Series = () => {
  // const navigate = useNavigate();
  const { contentData, isLoading, error } = useContentData("movie");

  // useEffect(() => {
  //   if (isLoading) {
  //     navigate("/loading");
  //   } else if (error) {
  //     navigate("/error")
  //     } else if (!isLoading && !error) {
  //       navigate("/series");
  //     }
  // },[isLoading, error, navigate]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <ContentList title={SERIES_TITLE} items={contentData} />
      )}
    </div>
  );
};
