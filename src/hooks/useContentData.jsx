import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { filterData } from "../utils/helper";

export const useContentData = (programType) => {
  const [contentData, setContentData] = useState([]);
  const { data: rawData, isLoading, error } = useFetch("/feed/sample.json");

  useEffect(() => {
    if (rawData) {
      const filteredContent = filterData({
        data: rawData,
        programType,
      });
      setContentData(filteredContent.slice(0, 21));
    }
  }, [rawData, programType]);

  return { contentData, isLoading, error };
};
