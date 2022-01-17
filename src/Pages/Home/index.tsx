import React, { useEffect } from "react";
import { Dashboard } from "@src/Components/Dashboard";
import { BoxSomeCharacters, Title } from "./styled";
import { UseCharactersContext } from "@src/Contexts/Characters.context";
import { Flex, FlexLink } from "@src/Styled";
import { iCharacter, iEvent } from "@src/Interfaces";
import { Link } from "react-router-dom";
import { UseEventsContext } from "@src/Contexts/Events.context";
import { BoxContent, BoxEventsItem, ItemBoxEvents } from "../Events/styled";
import { Skeleton } from "@src/Components/Skeleton";
import { BoxEventsHome } from "@src/Components/ItemBoxEvents";
import { BoxCharactersHome } from "@src/Components/ItemBoxCharacters";
import { UseMobileContext } from "@src/Contexts/Mobile.context";

export const Home: React.FC<any> = () => {
  const { searchCharacters, characters } = UseCharactersContext();
  const { searchEvents, events, loading: loadingEvents } = UseEventsContext();

  useEffect(() => {
    if (!!characters.length === false) {
      searchCharacters();
    }

    if (!!events.length === false) {
      searchEvents();
    }
  }, []);

  const { isMobile } = UseMobileContext();

  return (
    <Dashboard>
      <Title>SEE SOME CHARATCHERS</Title>

      <BoxSomeCharacters>
        {characters.map((item: iCharacter) => (
          <FlexLink
            width={isMobile ? "50%" : "30%"}
            textDecoration="none"
            minWidth={isMobile ? "50%" : "30%"}
            marginRight="30px"
            justifyContent="flex-start"
            textAlign="left"
            to={`/characthers/${item.id}/details`}
            key={item.id}
          >
            <BoxCharactersHome
              src={item.thumbnail.path + "." + item.thumbnail.extension}
              title={item.name}
            />
          </FlexLink>
        ))}
      </BoxSomeCharacters>

      <Flex justifyContent="flex-end" marginTop="30px">
        <Link to="/characthers">see all +</Link>
      </Flex>

      <Flex marginBottom="30px">
        <Title>SEE OUR EVENTS</Title>
      </Flex>

      <BoxContent>
        {loadingEvents ? (
          <>
            <BoxEventsItem>
              <ItemBoxEvents>
                <Skeleton height="500px" />
              </ItemBoxEvents>
            </BoxEventsItem>
            <BoxEventsItem>
              <ItemBoxEvents>
                <Skeleton height="500px" />
              </ItemBoxEvents>
            </BoxEventsItem>
          </>
        ) : (
          events.map((item: iEvent) => (
            <BoxEventsHome
              marginBottom="10px"
              key={item.id}
              title={item.title}
              start={item.start}
              description={item.description}
            />
          ))
        )}
      </BoxContent>

      <Flex justifyContent="flex-end" marginTop="30px">
        <Link to="/events">see all +</Link>
      </Flex>
    </Dashboard>
  );
};
