import React, { useEffect } from "react";

import { Dashboard } from "@src/Components/Dashboard";
import { Title } from "@src/Pages/Home/styled";

import { useParams } from "react-router-dom";
import { UseCharactersContext } from "@src/Contexts/Characters.context";
import { Flex, ImageWithCrop } from "@src/Styled";
import { Skeleton } from "@src/Components/Skeleton";
import {
  BoxData,
  BoxEventsItem,
  BoxText,
  BoxWithData,
  ItemBoxEvents,
} from "@src/Pages/Events/styled";
import {
  formatData,
  formatOnlyYear,
  formatWithoutYear,
} from "@src/Utils/formatData";
import { iComic, iEvent } from "@src/Interfaces";

export const CharactersDetails: React.FC<any> = () => {
  const { id } = useParams();
  const {
    searchCharactersById,
    characterById,
    eventsByCharacterId,
    comicsByCharacterId,
    loadingById,
  } = UseCharactersContext();

  useEffect(() => {
    if (id) {
      searchCharactersById(id);
    }
  }, []);

  if (loadingById) {
    return (
      <Dashboard>
        <Skeleton height="600px" />
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <Flex>
        <ImageWithCrop
          minWidth="300px"
          width="300px"
          height="300px"
          src={
            characterById.thumbnail.path +
            "." +
            characterById.thumbnail.extension
          }
        />
        <Flex marginLeft="30px" flexDirection="column">
          <Title marginBottom="20px">
            <strong>Name:</strong> {characterById.name}
          </Title>
          <Title>
            <strong>Description:</strong> {characterById.description}
          </Title>
        </Flex>
      </Flex>

      <Flex marginTop="30px" flexDirection="column">
        <Title>
          <strong>Events: </strong>
        </Title>
        <Flex marginLeft="-10px" marginRight="-10px" marginTop="30px">
          {!eventsByCharacterId.length ? (
            <>No related events</>
          ) : (
            eventsByCharacterId.map((item: iEvent) => (
              <BoxEventsItem key={item.id}>
                <Flex>
                  <ImageWithCrop
                    width="100%"
                    height="235px"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    marginRight="10px"
                  />
                  <Flex flexDirection="column">
                    <Title marginBottom="10px">
                      {formatData(item.start)} - {item.title}
                    </Title>
                    {item.description}
                  </Flex>
                </Flex>
              </BoxEventsItem>
            ))
          )}
        </Flex>
      </Flex>

      <Flex marginTop="30px" flexDirection="column">
        <Title>
          <strong>Comics: </strong>
        </Title>
        <Flex
          marginLeft="-10px"
          marginRight="-10px"
          marginTop="30px"
          flexWrap="wrap"
        >
          {!eventsByCharacterId.length ? (
            <>No related comics</>
          ) : (
            comicsByCharacterId.map((item: iComic) => (
              <Flex key={item.id} width="25%" marginBottom="30px">
                <Flex padding="0 10px" flexDirection="column">
                  <ImageWithCrop
                    width="100%"
                    height="365px"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    marginBottom="10px"
                  />
                  <Flex flexDirection="column">
                    <Title marginBottom="10px">{item.title}</Title>
                    {item.description}
                  </Flex>
                </Flex>
              </Flex>
            ))
          )}
        </Flex>
      </Flex>
    </Dashboard>
  );
};