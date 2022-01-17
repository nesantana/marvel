import styled from "styled-components";

import { displayAlignCenter, displayJustifyCenter } from "@src/Styled";

// Img
import fundoIMG from "./fundo.jpg";

export const HeaderStyled = styled.div`
  ${displayAlignCenter}
  justify-content: space-between;
  padding: 50px 0 20px 0;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: url(${fundoIMG}) no-repeat center center;
  background-size: cover;
  display: flex;

  img {
    width: 150px;
  }

  &.min {
    height: 250px;
    background-position: center 80%;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

export const ItemListMenu = styled.li`
  list-style: none;
  ${displayJustifyCenter}

  &, a {
    height: 80px;
    padding: 10px;
    color: #ffffff;
    text-decoration: none;
  }

  &.active a {
    background: rgba(255, 255, 255, 0.9);
    color: #000000;
  }
`;

export const MenuResponsivo = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 120px 30px 30px 30px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: auto;
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      margin-bottom: 10px;

      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
