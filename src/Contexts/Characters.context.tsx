import { characterApi } from "@src/Services/Character.service";
import React, { useContext, createContext, useState } from "react";
import { iCharacter, iEvent, iComic } from "@src/Interfaces/";

interface iCharactersContext {
  characters: iCharacter[];
  searchCharacters(): void;
  searchCharactersById(id: string): void;
  loading: boolean;
  loadingById: boolean;
  characterById: iCharacter;
  eventsByCharacterId: iEvent;
  comicsByCharacterId: iComic;
}

export const CharactersContext = createContext({} as iCharactersContext);

export const UseCharactersContext: any = () => useContext(CharactersContext);

export const UseCharactersContextProvider: React.FC<any> = ({ children }) => {
  const [characters, setCharacters] = useState<iCharacter[]>(
    [] as iCharacter[]
  );
  const [characterById, setCharacterById] = useState<iCharacter>(
    {} as iCharacter
  );
  const [eventsByCharacterId, setEventsByCharacterId] = useState<iEvent>(
    {} as iEvent
  );
  const [comicsByCharacterId, setComicsByCharacterId] = useState<iComic>(
    {} as iComic
  );

  const [offset, setOffiset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingById, setLoadingById] = useState<boolean>(true);

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

  const searchCharactersById: (id: string) => void = async (id: string) => {
    setLoadingById(true);
    try {
      const { data }: { data: any } = await characterApi.getId(id);

      console.log(data.data.results[0]);
      setCharacterById(data.data.results[0]);
      searchEventsByCharacterId(id);
    } catch (e) {
      console.error(e);
    }
  };

  const searchEventsByCharacterId: (id: string) => void = async (
    id: string
  ) => {
    try {
      const { data }: { data: any } = await characterApi.getEventsByCharacterId(
        id
      );

      console.log(data.data.results[0]);
      setEventsByCharacterId(data.data.results);
      searchComicsByCharacterId(id);
    } catch (e) {
      console.error(e);
    }
  };

  const searchComicsByCharacterId: (id: string) => void = async (
    id: string
  ) => {
    try {
      const { data }: { data: any } = await characterApi.getComicsByCharacterId(
        id
      );

      console.log(data.data.results[0]);
      setComicsByCharacterId(data.data.results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingById(false);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        characterById,
        characters,
        searchCharacters,
        searchCharactersById,
        eventsByCharacterId,
        comicsByCharacterId,
        loading,
        loadingById,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
