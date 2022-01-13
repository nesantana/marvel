import React, { useEffect } from "react";
import { Dashboard } from "../../Components/Dashboard";
import { Skeleton } from "../../Components/Skeleton";
import { UseComicsContext } from "../../Contexts/Comics.context";
import { iComic } from "../../Interfaces/iComics";
import { ButtonSearchMore } from "../../Styled";
import { BoxComics, ItemBoxComics } from "./styled";

export const Comics: React.FC<any> = () => {
  const { searchComics, loading: loadingComics, comics } = UseComicsContext();

  useEffect(() => {
    if (!!comics.length === false) {
      searchComics();
    }
  }, []);

  return (
    <Dashboard>
      <BoxComics>
        {comics.map((item: iComic) => (
          <ItemBoxComics
            key={item.id}
            src={item.thumbnail.path + "." + item.thumbnail.extension}
          ></ItemBoxComics>
        ))}

        {loadingComics && (
          <>
            <ItemBoxComics src="">
              <Skeleton height="500px" />
            </ItemBoxComics>
            <ItemBoxComics src="">
              <Skeleton height="500px" />
            </ItemBoxComics>
            <ItemBoxComics src="">
              <Skeleton height="500px" />
            </ItemBoxComics>
          </>
        )}

        <ButtonSearchMore onClick={() => searchComics()}>
          Carregar mais
        </ButtonSearchMore>
      </BoxComics>
    </Dashboard>
  );
};
