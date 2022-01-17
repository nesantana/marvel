import React from "react";
import { Flex, ImageWithCrop } from "@src/Styled";
import { BoxCharactersItems } from "@src/Pages/Home/styled";

interface iBoxEventsHome {
  src: string;
  title: string;
  marginBottom?: string;
  key?: string | number;
}

export const BoxCharactersHome: React.FC<iBoxEventsHome> = ({
  src = "",
  title = "",
  ...props
}) => {
  return (
    <BoxCharactersItems {...props} data-testid="content">
      <ImageWithCrop
        data-testid="img"
        marginBottom="10px"
        width="100%"
        minWidth="100%"
        height="300px"
        src={src}
      />
      <Flex data-testid="title" textDecoration="none">
        {title}
      </Flex>
    </BoxCharactersItems>
  );
};
