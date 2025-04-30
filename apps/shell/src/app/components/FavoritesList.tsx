import { useCharactersContext } from '@react-monorepo/shared';

export function FavoritesList() {
  const { favorites } = useCharactersContext();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Personajes Favoritos</h2>
      
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No hay favoritos aún</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((character) => (
            <div key={character.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img 
                src={character.image} 
                alt={character.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{character.name}</h3>
              <p className="text-sm text-gray-600">{character.species}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mantenemos el JSON.stringify para debugging */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Debug Info:</h3>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
          {JSON.stringify(favorites, null, 2)}
        </pre>
      </div>
    </div>
  );
} 