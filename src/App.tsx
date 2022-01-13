import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "./Pages/Home";
import { Character } from "./Pages/Character";

// Styled
import { createGlobalStyle } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import { Comics } from "./Pages/Comics";

const GlobalStyled = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
  }

  img {
    max-width: 100%;
    width: auto;
  }

  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    transition: .2s ease-in-out;
  }

  span[aria-live="polite"] {
    width: 100%;
  }
`;

export const App: React.FC<any> = () => {
  return (
    <Router>
      <>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characthers" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </>
    </Router>
  );
};
