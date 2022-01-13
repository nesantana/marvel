import styled from "styled-components";

export const ContainerTooltip = styled.div`
  position: relative;

  .text-tooltip {
    opacity: 0;
  }

  &:hover .text-tooltip {
    opacity: 1;
  }
`;

export const TextTooltip = styled.div`
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  padding: 10px;
  position: absolute;
  left: 115%;
  top: 0;
  color: #fff;
  width: auto;
  border-radius: 10px;
  pointer-events: none;

  svg {
    position: absolute;
    font-size: 20px;
    left: -12px;
    color: rgba(0, 0, 0, 0.9);
    top: 50%;
    transform: translate(0px, -50%);
  }
`;
