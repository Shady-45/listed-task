import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data };
};
