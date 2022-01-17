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
