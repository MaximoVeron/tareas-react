import { useState } from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const igualarCount = () => {
    setCount(initialCount);
  };

  return { count, incrementCount, decrementCount, igualarCount };
};
