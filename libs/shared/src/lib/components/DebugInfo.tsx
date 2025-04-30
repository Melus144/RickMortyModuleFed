import { useState } from 'react';
import { useCharactersContext } from '../context';

export const DebugInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { characters, favorites } = useCharactersContext();

  return (
    <div className="mt-4 bg-gray-100 rounded-lg p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-700"
      >
        <span>Debug Information</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2">
          <div className="bg-white p-3 rounded-md">
            <h3 className="font-semibold">Characters in Context:</h3>
            <p className="text-sm text-gray-600">
              Total: {characters.length}
            </p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <h3 className="font-semibold">Favorites:</h3>
            <p className="text-sm text-gray-600">
              Total: {favorites.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}; 