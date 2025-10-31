import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch";

export const Main = () => {
  const { count, incrementCount, decrementCount, igualarCount } = useCounter(1);
  const { dataState } = useFetch({
    data: null,
    isLoading: true,
  });
  const { data, isLoading } = dataState;
  return (
    <>
      <h2>Character:</h2>
      <h2>Contador: {count}</h2>
      <button onClick={incrementCount}>Siguiente</button>
      <button onClick={decrementCount}>Anterior</button>
      <button onClick={igualarCount}>Volver al comienzo</button>
    </>
  );
};
