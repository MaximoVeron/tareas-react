import { useCounter } from '../hooks/useCounter';

export const Principal = () => {
  const { counter, incrementCounter, decrementCounter, equealCounter } = useCounter(0);
  return (
    <main>
      <h2>Contador:{counter}</h2>
      <button className="mx-2" onClick={incrementCounter}>
        +1
      </button>
      <button className="mx-2" onClick={decrementCounter}>
        -1
      </button>
      <button className="mx-2" onClick={equealCounter}>
        =1
      </button>
    </main>
  );
};
