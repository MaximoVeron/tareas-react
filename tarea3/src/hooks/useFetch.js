import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resp = await response.json();
        setData(resp);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};
