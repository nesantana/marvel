import React, { useEffect } from "react";
import { Dashboard } from "@src/Components/Dashboard";
import { Skeleton } from "@src/Components/Skeleton";
import { UseCharactersContext } from "@src/Contexts/Characters.context";
import { iCharacter } from "@src/Interfaces/";
import {
  Box,
  BoxCharacter,
  BoxCharacterDetails,
  BoxCharacterText,
  CharacterDetail,
  TextCharacter,
  TitleCharacter,
} from "./styled";
import { GiSpellBook, GiBookshelf } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoIosEasel } from "react-icons/io";
import { Tooltip } from "@src/Components/Tooltip";
import { ButtonSearchMore, ImageWithCrop } from "@src/Styled";

export const Character: React.FC<any> = () => {
  const {
    searchCharacters,
    characters,
    loading: loadingCharacters,
  } = UseCharactersContext();

  useEffect(() => {
    if (!!characters.length === false) {
      searchCharacters();
    }
  }, []);

  return (
    <Dashboard>
      <>
        <Box>
          {characters.map((item: iCharacter) => (
            <BoxCharacter key={item.id}>
              <ImageWithCrop
                marginBottom="30px"
                width="100%"
                height="300px"
                src={item.thumbnail.path + "." + item.thumbnail.extension}
              />
              <BoxCharacterText>
                <TitleCharacter>{item.name}</TitleCharacter>
                <TextCharacter>{item.description}</TextCharacter>

                <BoxCharacterDetails>
                  <Tooltip title="Comics">
                    <CharacterDetail>
                      <GiBookshelf fontSize="20px" />
                      {item.comics.items.length}
                    </CharacterDetail>
                  </Tooltip>

                  <Tooltip title="Events">
                    <CharacterDetail>
                      <BsFillCalendarEventFill fontSize="20px" />
                      {item.events.items.length}
                    </CharacterDetail>
                  </Tooltip>

                  <Tooltip title="Series">
                    <CharacterDetail>
                      <IoIosEasel fontSize="20px" />
                      {item.series.items.length}
                    </CharacterDetail>
                  </Tooltip>

                  <Tooltip title="Stories">
                    <CharacterDetail>
                      <GiSpellBook fontSize="25px" />
                      {item.stories.items.length}
                    </CharacterDetail>
                  </Tooltip>
                </BoxCharacterDetails>
              </BoxCharacterText>
            </BoxCharacter>
          ))}

          {loadingCharacters && (
            <>
              <BoxCharacter>
                <Skeleton height="300px" />
              </BoxCharacter>
              <BoxCharacter>
                <Skeleton height="300px" />
              </BoxCharacter>
            </>
          )}

          <ButtonSearchMore onClick={() => searchCharacters()}>
            Carregar mais
          </ButtonSearchMore>
        </Box>
      </>
    </Dashboard>
  );
};
