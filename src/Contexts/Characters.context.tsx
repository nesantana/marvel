import { iComponentSimple } from "../Interfaces";
import { characterApi } from "../Services/Character.service";
import React, { useContext, createContext, useState } from "react";
import { iCharacter } from "../Interfaces/iCharacter";

interface iCharactersContext {
  characters: iCharacter[];
  searchCharacters(): void;
  loading: boolean;
}

export const CharactersContext = createContext({} as iCharactersContext);

export const UseCharactersContext: any = () => useContext(CharactersContext);

export const UseCharactersContextProvider: React.FC<any> = ({ children }) => {
  const [characters, setCharacters] = useState<iCharacter[]>(
    [] as iCharacter[]
  );
  const [offset, setOffiset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const searchCharacters: any = async () => {
    setLoading(true);
    try {
      const { data }: { data: any } = await characterApi.get({ offset });

      setOffiset(offset + data.data.count);

      const newCharacters = [...characters, ...data.data.results];

      setCharacters(newCharacters as iCharacter[]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        searchCharacters,
        loading,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
