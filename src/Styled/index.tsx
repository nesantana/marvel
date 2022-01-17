import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const colorPrimary = "#ec1c23";

export const displayFlexWithCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const displayJustifyCenter = `
  display: flex;
  justify-content: center;
`;

export const displayAlignCenter = `
  display: flex;
  align-items: center;
`;

export const ButtonSearchMore = styled.div`
  margin: 30px auto;
  border-radius: 10px;
  padding: 15px 40px;
  background: ${colorPrimary};
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

interface iImageWithCrop {
  src?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  borderRadius?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}
export const ImageWithCrop = styled.div<iImageWithCrop>`
  width: ${({ width = "33.3%" }) => width};
  min-width: ${({ minWidth = "auto" }) => minWidth};
  max-width: ${({ maxWidth = "auto" }) => maxWidth};
  height: ${({ height = "500px" }) => height};
  border-radius: ${({ borderRadius = "0" }) => borderRadius};
  background: url(${({ src = "" }) => src}) center center;
  margin-bottom: ${({ marginBottom = "0" }) => marginBottom};
  margin-top: ${({ marginTop = "0" }) => marginTop};
  margin-left: ${({ marginLeft = "0" }) => marginLeft};
  margin-right: ${({ marginRight = "0" }) => marginRight};
  background-size: cover;
`;

type tDisplay = "flex" | "block" | "inline-block" | "inline-flex";
type tSpaces =
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "center";
type tDirection = "row" | "row-reverse" | "column" | "column-reverse";
type tFlexWrap = "wrap" | "nowrap" | "wrap-reverse";
type tTextAlign = "right" | "left" | "center";
type tTextDecoration = "none" | "underline";
type tPosition = "initial" | "relative" | "absolute" | "fixed";

interface iFlex {
  textDecoration?: tTextDecoration;
  display?: tDisplay;
  justifyContent?: tSpaces;
  alignItems?: tSpaces;
  flexDirection?: tDirection;
  textAlign?: tTextAlign;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  padding?: string;
  flexWrap?: tFlexWrap;
  position?: tPosition;
  left?: string;
  bottom?: string;
  right?: string;
  top?: string;
  background?: string;
  zIndex?: string;
}

export const Flex = styled.div<iFlex>`
  width: ${({ width = "100%" }) => width};
  min-width: ${({ minWidth = "auto" }) => minWidth};
  max-width: ${({ maxWidth = "auto" }) => maxWidth};
  height: ${({ height = "auto" }) => height};
  border-radius: ${({ borderRadius = "0" }) => borderRadius};
  display: ${({ display = "flex" }) => display};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  margin-bottom: ${({ marginBottom = "0" }) => marginBottom};
  margin-top: ${({ marginTop = "0" }) => marginTop};
  margin-left: ${({ marginLeft = "0" }) => marginLeft};
  margin-right: ${({ marginRight = "0" }) => marginRight};
  border: ${({ border = "0" }) => border};
  padding: ${({ padding = "0" }) => padding};
  text-align: ${({ textAlign = "" }) => textAlign};
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  position: ${({ position = "initial" }) => position};
  top: ${({ top = "initial" }) => top};
  right: ${({ right = "initial" }) => right};
  bottom: ${({ bottom = "initial" }) => bottom};
  left: ${({ left = "initial" }) => left};
  background: ${({ background = "transparent" }) => background};
  z-index: ${({ zIndex = "initial" }) => zIndex};
`;

export const FlexLink = styled(Link)<iFlex>`
  width: ${({ width = "100%" }) => width};
  min-width: ${({ minWidth = "auto" }) => minWidth};
  max-width: ${({ maxWidth = "auto" }) => maxWidth};
  height: ${({ height = "auto" }) => height};
  border-radius: ${({ borderRadius = "0" }) => borderRadius};
  display: ${({ display = "flex" }) => display};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  margin-bottom: ${({ marginBottom = "0" }) => marginBottom};
  margin-top: ${({ marginTop = "0" }) => marginTop};
  margin-left: ${({ marginLeft = "0" }) => marginLeft};
  margin-right: ${({ marginRight = "0" }) => marginRight};
  border: ${({ border = "0" }) => border};
  padding: ${({ padding = "0" }) => padding};
  position: ${({ position = "initial" }) => position};
  top: ${({ top = "initial" }) => top};
  right: ${({ right = "initial" }) => right};
  bottom: ${({ bottom = "initial" }) => bottom};
  left: ${({ left = "initial" }) => left};
`;
