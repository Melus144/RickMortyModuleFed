import { CharactersList } from './components';
import { Navigation, DebugInfo } from '@react-monorepo/shared';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto p-4">
        <CharactersList />
        <DebugInfo />
      </div>
    </div>
  );
}

export default App;
