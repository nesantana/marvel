import styled from "styled-components";

interface iTitle {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const Title = styled.div<iTitle>`
  margin-bottom: ${({ marginBottom = "0" }) => marginBottom};
  margin-top: ${({ marginTop = "0" }) => marginTop};
  margin-left: ${({ marginLeft = "0" }) => marginLeft};
  margin-right: ${({ marginRight = "0" }) => marginRight};
`;

export const BoxSomeCharacters = styled.div`
  display: flex;
  overflow: auto;
  padding: 0 0 10px 0;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const BoxCharactersItems = styled.div`
  width: 100%;
  min-width: 100%;
  color: #999999;
  text-decoration: none;
  text-align: left;
`;
