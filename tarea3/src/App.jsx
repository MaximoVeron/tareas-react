// import './App.css';
// import { useFetch } from './hooks/useFetch';

import { CharacterInfo } from './components/CharacterInfo';

// function App() {
//   const { data, error } = useFetch('https://rickandmortyapi.com/api/character');

//   return (
//     <>
//       {error && <h1>Error al traer los personajes</h1>}
//       {data.results.map((character) => (
//         <h1>{character.name}</h1>
//       ))}
//     </>
//   );
// }

// export default App;

const App = () => {
  return (
    <>
      <CharacterInfo />
    </>
  );
};
export default App;
