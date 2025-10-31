import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const useFetch = () => {
  const { count } = useCounter();
  const [dataState, setDataState] = useState({});
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = response.json();
      setDataState(data);
    };
    fetchData();
  }, [url]);
  return { dataState };
};
