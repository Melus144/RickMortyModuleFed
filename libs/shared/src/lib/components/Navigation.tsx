import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              RickMortyApi
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/characters"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
            >
              Characters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 