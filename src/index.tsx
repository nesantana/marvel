import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UseCharactersContextProvider } from "@src/Contexts/Characters.context";
import { UseComicsContextProvider } from "@src/Contexts/Comics.context";
import { UseEventsContextProvider } from "@src/Contexts/Events.context";

ReactDOM.render(
  <React.StrictMode>
    <UseCharactersContextProvider>
      <UseComicsContextProvider>
        <UseEventsContextProvider>
          <App />
        </UseEventsContextProvider>
      </UseComicsContextProvider>
    </UseCharactersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
