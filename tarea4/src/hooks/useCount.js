import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => setCount((c) => c + 1);
  const decrementCount = () => setCount((c) => c - 1);
  const equalCount = () => setCount(1);
  return { count, incrementCount, decrementCount, equalCount };
};
