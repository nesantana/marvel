import React from "react";
import { iComponentSimple } from "@src/Interfaces";
import { ContainerTooltip, TextTooltip } from "./styled";
import { BiCaretLeft } from "react-icons/bi";

interface iTooltip extends iComponentSimple {
  title: string;
}

export const Tooltip: React.FC<iTooltip> = ({ children, title }) => {
  return (
    <ContainerTooltip>
      {children}

      <TextTooltip className="text-tooltip">
        <BiCaretLeft /> {title}
      </TextTooltip>
    </ContainerTooltip>
  );
};
