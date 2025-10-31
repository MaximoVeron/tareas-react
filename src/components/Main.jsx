import { useCounter } from "../Hooks/useCounter";

export const Main = () => {
  const { count, incrementCount, decrementCount, igualarCount } = useCounter(1);

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
      <button onClick={igualarCount}>=1</button>
    </>
  );
};
