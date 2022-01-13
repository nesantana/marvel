import React, { useEffect } from "react";
import { Dashboard } from "../../Components/Dashboard";
import { Skeleton } from "../../Components/Skeleton";
import { UseCharactersContext } from "../../Contexts/Characters.context";
import { iCharacter } from "../../Interfaces/iCharacter";
import {
  Box,
  BoxCharacter,
  BoxCharacterDetails,
  BoxCharacterText,
  CharacterDetail,
  TextCharacter,
  Thumbnail,
  TitleCharacter,
} from "./styled";
import { GiSpellBook, GiBookshelf } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoIosEasel } from "react-icons/io";
import { Tooltip } from "../../Components/Tooltip";
import { ButtonSearchMore } from "../../Styled";

export const Character: React.FC<any> = () => {
  const {
    searchCharacters,
    characters,
    loading: loadingCharacters,
  } = UseCharactersContext();

  console.log(characters);

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
              <Thumbnail
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
