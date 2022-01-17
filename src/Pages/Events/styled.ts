import { colorPrimary, displayAlignCenter } from "@src/Styled";
import styled from "styled-components";

export const BoxContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const BoxEventsItem = styled.div`
  width: 50%;
  min-width: 50%;
  padding: 0 10px;
  margin-bottom: 50px;
`;

export const ItemBoxEvents = styled.div``;

export const BoxWithData = styled.div`
  ${displayAlignCenter}
`;

export const BoxText = styled.div`
  ${displayAlignCenter}
  height: 200px;
  overflow: hidden;
`;

export const BoxData = styled.div`
  ${displayAlignCenter}
  font-size: 30px;
  height: 200px;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
  text-align: center;
  border-right: 5px solid ${colorPrimary};
`;
