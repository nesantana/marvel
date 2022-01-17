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
}
export const ImageWithCrop = styled.div<iImageWithCrop>`
  width: ${({ width = "33.3%" }) => width};
  min-width: ${({ minWidth = "auto" }) => minWidth};
  max-width: ${({ maxWidth = "auto" }) => maxWidth};
  height: ${({ height = "500px" }) => height};
  border-radius: ${({ borderRadius = "0" }) => borderRadius};
  background: url(${({ src = "" }) => src}) center center;
  margin-bottom: ${({ marginBottom = "0" }) => marginBottom};
  background-size: cover;
`;
