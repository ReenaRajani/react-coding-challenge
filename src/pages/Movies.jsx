import React from "react";

import { ContentList } from "../components/ContentList";
import { useContentData } from "../hooks/useContentData";
import { MOVIES_TITLE } from "../constants";

export const Movies = () => {
  const { contentData, isLoading, error } = useContentData("movie");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <ContentList title={MOVIES_TITLE} items={contentData} />
      )}
    </div>
  );
};
