import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    FC,
    useEffect,
  } from 'react';
  
  interface Character {
    id: number;
    name: string;
    species: string;
    image: string;
  }
  
  interface CharactersContextProps {
    characters: Character[];
    setCharacters: Dispatch<SetStateAction<Character[]>>;
    favorites: Character[];
    addFavorite: (character: Character) => void;
    removeFavorite: (characterId: number) => void;
  }
  
  const FAVORITES_STORAGE_KEY = 'rick-morty-favorites';
  
  const CharactersContext = createContext<CharactersContextProps | undefined>(
    undefined
  );
  
  interface CharactersProviderProps {
    children: ReactNode;
  }
  
  export const CharactersProvider: FC<CharactersProviderProps> = ({
    children,
  }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<Character[]>(() => {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
  
    useEffect(() => {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);
  
    const addFavorite = (character: Character) => {
      setFavorites(prev => [...prev, character]);
    };
  
    const removeFavorite = (characterId: number) => {
      setFavorites(prev => prev.filter(char => char.id !== characterId));
    };
  
    return (
      <CharactersContext.Provider 
        value={{ 
          characters, 
          setCharacters, 
          favorites, 
          addFavorite, 
          removeFavorite 
        }}
      >
        {children}
      </CharactersContext.Provider>
    );
  };
  
  export const useCharactersContext = (): CharactersContextProps => {
    const context = useContext(CharactersContext);
    if (!context) {
      throw new Error(
        'useCharactersContext must be used within a CharactersProvider'
      );
    }
    return context;
  };
  