import React, { useEffect } from "react";
import { Dashboard } from "@src/Components/Dashboard";
import { UseEventsContext } from "@src/Contexts/Events.context";
import { iEvent } from "@src/Interfaces/";
import {
  BoxData,
  BoxContent,
  BoxEventsItem,
  BoxText,
  BoxWithData,
  ItemBoxEvents,
} from "./styled";
import { formatOnlyYear, formatWithoutYear } from "@src/Utils/formatData";
import { ButtonSearchMore, ImageWithCrop } from "@src/Styled";
import { Skeleton } from "@src/Components/Skeleton";

export const Events: React.FC<any> = () => {
  const { searchEvents, events, loading: loadingEvents } = UseEventsContext();

  useEffect(() => {
    if (!!events.length === false) {
      searchEvents();
    }
  }, []);

  return (
    <Dashboard>
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
            <BoxEventsItem key={item.id}>
              <ItemBoxEvents>
                <ImageWithCrop
                  width="100%"
                  height="480px"
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  marginBottom="30px"
                />

                <BoxWithData>
                  <BoxData>
                    {formatWithoutYear(item.start)}
                    <br />
                    {formatOnlyYear(item.start)}
                  </BoxData>
                  <BoxText>
                    {item.title}
                    <br />
                    {item.description}
                  </BoxText>
                </BoxWithData>
              </ItemBoxEvents>
            </BoxEventsItem>
          ))
        )}

        <ButtonSearchMore onClick={() => searchEvents()}>
          Carregar mais
        </ButtonSearchMore>
      </BoxContent>
    </Dashboard>
  );
};