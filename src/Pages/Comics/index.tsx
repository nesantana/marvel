import React, { useEffect } from "react";
import { Dashboard } from "@src/Components/Dashboard";
import { Skeleton } from "@src/Components/Skeleton";
import { UseComicsContext } from "@src/Contexts/Comics.context";
import { iComic } from "@src/Interfaces/";
import { ButtonSearchMore, ImageWithCrop } from "@src/Styled";
import { BoxComics } from "./styled";

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
          <ImageWithCrop
            key={item.id}
            src={item.thumbnail.path + "." + item.thumbnail.extension}
          ></ImageWithCrop>
        ))}

        {loadingComics && (
          <>
            <ImageWithCrop src="">
              <Skeleton height="500px" />
            </ImageWithCrop>
            <ImageWithCrop src="">
              <Skeleton height="500px" />
            </ImageWithCrop>
            <ImageWithCrop src="">
              <Skeleton height="500px" />
            </ImageWithCrop>
          </>
        )}

        <ButtonSearchMore onClick={() => searchComics()}>
          Carregar mais
        </ButtonSearchMore>
      </BoxComics>
    </Dashboard>
  );
};
