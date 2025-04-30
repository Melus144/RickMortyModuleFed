import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { useCharactersContext } from '@react-monorepo/shared';
import { FavoritesList } from './components/FavoritesList';

const Characters = React.lazy(() => import('characters/Module'));

export function App() {
  const { characters } = useCharactersContext();

  return (
    <React.Suspense fallback={null}>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Characters in Context:</h2>
          <pre className="bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(characters, null, 2)}
          </pre>
        </div>
        
        <FavoritesList />

        <ul className="flex space-x-4 mb-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/characters" className="text-blue-500 hover:text-blue-700">Characters</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
