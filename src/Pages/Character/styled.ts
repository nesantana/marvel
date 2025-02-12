import styled from "styled-components";
import { colorPrimary, displayAlignCenter } from "@src/Styled";

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BoxCharacter = styled.div`
  ${displayAlignCenter}
  background: #ffffff;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  width: 49%;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: #000000;
  }
`;

export const BoxCharacterText = styled.div`
  width: 100%;
`;

export const TitleCharacter = styled.div`
  font-size: 26px;
`;

export const TextCharacter = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export const BoxCharacterDetails = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const CharacterDetail = styled.div`
  ${displayAlignCenter}
  border-radius: 10px;
  width: auto;
  height: 40px;
  padding: 0 10px;
  background: ${colorPrimary};
  color: #ffffff;

  svg {
    margin-right: 10px;
  }
`;
