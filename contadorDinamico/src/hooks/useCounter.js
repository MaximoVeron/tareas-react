import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };
  const equealCounter = () => {
    setCounter(initialValue);
  };
  return { counter, incrementCounter, decrementCounter, equealCounter };
};
