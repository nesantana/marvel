import { eventsApi } from "@src/Services/Events.service";
import React, { useContext, createContext, useState } from "react";
import { iEvent } from "@src/Interfaces/";

interface iEventsContext {
  events: iEvent[];
  searchEvents(): void;
  loading: boolean;
}

export const EventsContext = createContext({} as iEventsContext);

export const UseEventsContext: any = () => useContext(EventsContext);

export const UseEventsContextProvider: React.FC<any> = ({ children }) => {
  const [events, setEvents] = useState<iEvent[]>([] as iEvent[]);
  const [offset, setOffiset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const searchEvents: any = async () => {
    setLoading(true);
    try {
      const { data }: { data: any } = await eventsApi.get({ offset });

      setOffiset(offset + data.data.count);

      const newEvents = [...events, ...data.data.results];

      setEvents(newEvents as iEvent[]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        searchEvents,
        loading,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
