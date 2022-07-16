import { useState, useEffect } from "react";

//Custom hook to fetch data from an API

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(url);
  }, [url]);

  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }

  return { data, error };
}

export default useFetch;
