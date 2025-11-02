import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(1);
  const incrementcCounter = () => {
    setCounter((c) => c + 1);
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter((c) => c - 1);
    }
  };
  const returnCounter = () => {
    setCounter(1);
  };
  return { counter, incrementcCounter, decrementCounter, returnCounter };
};
