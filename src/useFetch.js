import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("UseFetch useEffect");
    if (options) {
      fetch(options)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [options]);
  console.log("useFetch Render");
  return {
    data,
  };
};
