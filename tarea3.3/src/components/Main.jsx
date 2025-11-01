import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';
import { CharacterInfo } from './CharacterInfo';

export const Main = () => {
  const { count, incrementCount, decrementCount, igualarCount } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { dataState } = useFetch(url);
  return (
    <>
      <div className="container">
        <CharacterInfo character={dataState} />
        <h2>Contador: {count}</h2>
        <button onClick={incrementCount}>Siguiente</button>
        <button onClick={decrementCount} disabled={count <= 1}>
          Anterior
        </button>
        <button onClick={igualarCount}>Volver al comienzo</button>
      </div>
    </>
  );
};
