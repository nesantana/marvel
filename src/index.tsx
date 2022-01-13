import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UseCharactersContextProvider } from "./Contexts/Characters.context";

ReactDOM.render(
  <React.StrictMode>
    <UseCharactersContextProvider>
      <App />
    </UseCharactersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
