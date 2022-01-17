import React, { useEffect } from "react";
import { Dashboard } from "@src/Components/Dashboard";
import { UseEventsContext } from "@src/Contexts/Events.context";
import { iEvent } from "@src/Interfaces/";
import { BoxContent, BoxEventsItem, ItemBoxEvents } from "./styled";
import { ButtonSearchMore, ImageWithCrop } from "@src/Styled";
import { Skeleton } from "@src/Components/Skeleton";
import { BoxEventsHome } from "@src/Components/ItemBoxEvents";
import { UseMobileContext } from "@src/Contexts/Mobile.context";

export const Events: React.FC<any> = () => {
  const { searchEvents, events, loading: loadingEvents } = UseEventsContext();

  useEffect(() => {
    if (!!events.length === false) {
      searchEvents();
    }
  }, []);

  const { isMobile } = UseMobileContext();

  return (
    <Dashboard>
      <BoxContent>
        {loadingEvents ? (
          <>
            <BoxEventsItem width={isMobile ? "100%" : "50%"}>
              <ItemBoxEvents>
                <Skeleton height="500px" />
              </ItemBoxEvents>
            </BoxEventsItem>
            <BoxEventsItem width={isMobile ? "100%" : "50%"}>
              <ItemBoxEvents>
                <Skeleton height="500px" />
              </ItemBoxEvents>
            </BoxEventsItem>
          </>
        ) : (
          events.map((item: iEvent) => (
            <BoxEventsItem key={item.id} width={isMobile ? "100%" : "50%"}>
              <ItemBoxEvents>
                <ImageWithCrop
                  width="100%"
                  height="480px"
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                />

                <BoxEventsHome
                  width="100%"
                  padding="0"
                  start={item.start}
                  title={item.title}
                  description={item.description}
                />
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
