import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';

// export const CharacterInfo = () => {
//   const { data, error } = useFetch('https://rickandmortyapi.com/api/character/1');
//   if (!data) return <Loading />;
//   return (
//     <>
//       {error && <h1>Error al cargar los personajes</h1>}
//       {data.results((character) => (
//         <div key={character.id}>
//           <img src={character.image} alt="imagen-character" />
//           <h1>{character.name}</h1>
//         </div>
//       ))}
//     </>
//   );
// };

export const CharacterInfo = () => {
  const { counter, incrementcCounter, decrementCounter, returnCounter } = useCounter();
  const { data, error } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  if (!data) return <Loading />;
  const character = data;
  return (
    <>
      {error && <h1>Error al cargar los personajes</h1>}
      <div key={character.id}>
        <img src={character.image} alt="imagen-character" />
        <h1>{character.name}</h1>
      </div>
      <button className="button" disabled={counter === 1} type="button" onClick={decrementCounter}>
        anterior
      </button>
      <button className="button" type="button" onClick={incrementcCounter}>
        siguiente
      </button>
      {counter > 1 && (
        <button className="button" type="button" onClick={returnCounter}>
          volver al primer personaje
        </button>
      )}
    </>
  );
};
