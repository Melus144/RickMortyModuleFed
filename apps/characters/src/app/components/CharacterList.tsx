import { useCharactersContext, useFetch } from '@react-monorepo/shared';
import { FC } from 'react';
import { ApiResponse, Character } from './../models';

const CharactersList: FC = () => {
  const { setCharacters, favorites, addFavorite, removeFavorite } = useCharactersContext();

  const { data, loading, error } = useFetch<ApiResponse>(
    'https://rickandmortyapi.com/api/character'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const saveData = () => {
    if (data) setCharacters(data.results);
  };

  const isFavorite = (characterId: number) => {
    return favorites.some(fav => fav.id === characterId);
  };

  const handleFavoriteClick = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.results.map((character: Character) => (
          <li key={character.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{character.name}</h2>
            <p>{character.species}</p>
            <button
              onClick={() => handleFavoriteClick(character)}
              className={`mt-2 px-4 py-2 rounded ${
                isFavorite(character.id)
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              {isFavorite(character.id) ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </li>
        ))}
      </ul>
      <button 
        onClick={saveData}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save Data to Context
      </button>
    </div>
  );
};

export default CharactersList;
