import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UseCharactersContextProvider } from "@src/Contexts/Characters.context";
import { UseComicsContextProvider } from "@src/Contexts/Comics.context";
import { UseEventsContextProvider } from "@src/Contexts/Events.context";
import { UseMobileContextProvider } from "./Contexts/Mobile.context";

ReactDOM.render(
  <React.StrictMode>
    <UseMobileContextProvider>
      <UseCharactersContextProvider>
        <UseComicsContextProvider>
          <UseEventsContextProvider>
            <App />
          </UseEventsContextProvider>
        </UseComicsContextProvider>
      </UseCharactersContextProvider>
    </UseMobileContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
