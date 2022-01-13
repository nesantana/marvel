import styled from "styled-components";

export const BoxComics = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface iItemBoxComics {
  src?: string;
}
export const ItemBoxComics = styled.div<iItemBoxComics>`
  width: 10%;
  min-width: 33.3%;
  max-width: 50%;
  height: 500px;
  background: url(${({ src }) => src || ""}) center center;
  background-size: cover;
`;
