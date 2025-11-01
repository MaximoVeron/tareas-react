import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [dataState, setDataState] = useState({});

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setDataState(data);
    };
    fetchData();
  }, [url]);
  return { dataState };
};
