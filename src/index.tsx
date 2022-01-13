import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UseCharactersContextProvider } from "./Contexts/Characters.context";
import { UseComicsContextProvider } from "./Contexts/Comics.context";

ReactDOM.render(
  <React.StrictMode>
    <UseCharactersContextProvider>
      <UseComicsContextProvider>
        <App />
      </UseComicsContextProvider>
    </UseCharactersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
