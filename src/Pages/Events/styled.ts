import { colorPrimary, displayAlignCenter } from "@src/Styled";
import styled from "styled-components";

export const BoxContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

interface iBoxEventsItem {
  marginBottom?: string;
  width?: string;
  padding?: string;
}

export const BoxEventsItem = styled.div<iBoxEventsItem>`
  width: ${({ width = "50%" }) => width};
  min-width: ${({ width = "50%" }) => width};
  padding: ${({ padding = "0 10px" }) => padding};
  margin-bottom: ${({ marginBottom = "30px" }) => marginBottom};
`;

export const ItemBoxEvents = styled.div``;

export const BoxWithData = styled.div`
  ${displayAlignCenter}
`;

interface iBoxText {
  overflow?: string;
}

export const BoxText = styled.div<iBoxText>`
  ${displayAlignCenter}
  flex-direction: column;
  height: 200px;
  overflow: ${({ overflow = "hidden" }) => overflow};
`;

export const BoxData = styled.div`
  flex-direction: column;
  ${displayAlignCenter}
  font-size: 30px;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
  text-align: center;
  border-right: 5px solid ${colorPrimary};
`;
