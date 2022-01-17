import {
  BoxData,
  BoxEventsItem,
  BoxText,
  BoxWithData,
  ItemBoxEvents,
} from "@src/Pages/Events/styled";
import { Flex } from "@src/Styled";
import { formatOnlyYear, formatWithoutYear } from "@src/Utils/formatData";
import React from "react";

interface iBoxEventsHome {
  start: string;
  title: string;
  description: string;
  marginBottom?: string;
  key?: string | number;
  width?: string;
  padding?: string;
}

export const BoxEventsHome: React.FC<iBoxEventsHome> = ({
  start = "",
  title = "",
  description = "",
  ...props
}) => {
  return (
    <BoxEventsItem data-testid="content" {...props}>
      <Flex border="1px solid #999999" padding="20px">
        <ItemBoxEvents>
          <BoxWithData>
            {start && (
              <BoxData data-testid="boxDate">
                <Flex data-testid="boxWithoutYear" justifyContent="center">
                  {formatWithoutYear(start)}
                </Flex>
                <Flex data-testid="boxOnlyYear" justifyContent="center">
                  {formatOnlyYear(start)}
                </Flex>
              </BoxData>
            )}
            <BoxText overflow="auto">
              <Flex data-testid="boxTitle" marginBottom="10px">
                {title}
              </Flex>
              <Flex data-testid="boxDescription">{description}</Flex>
            </BoxText>
          </BoxWithData>
        </ItemBoxEvents>
      </Flex>
    </BoxEventsItem>
  );
};
