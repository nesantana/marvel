import { comicsApi } from "@src/Services/Comics.service";
import React, { useContext, createContext, useState } from "react";
import { iComic } from "@src/Interfaces/";

interface iComicsContext {
  comics: iComic[];
  searchComics(): void;
  loading: boolean;
}

export const ComicsContext = createContext({} as iComicsContext);

export const UseComicsContext: any = () => useContext(ComicsContext);

export const UseComicsContextProvider: React.FC<any> = ({ children }) => {
  const [comics, setComics] = useState<iComic[]>([] as iComic[]);
  const [offset, setOffiset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const searchComics: any = async () => {
    setLoading(true);
    try {
      const { data }: { data: any } = await comicsApi.get({ offset });

      setOffiset(offset + data.data.count);

      const newComicss = [...comics, ...data.data.results];

      setComics(newComicss as iComic[]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ComicsContext.Provider
      value={{
        comics,
        searchComics,
        loading,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};
