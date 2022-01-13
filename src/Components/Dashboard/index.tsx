import { iComponentSimple } from "../../Interfaces/";
import React from "react";
import { Header } from "../Header";
import { Container } from "./styled";

export const Dashboard: React.FC<any> = (props: iComponentSimple) => {
  console.log(props.children);
  return (
    <>
      <Header />

      <Container>{props.children}</Container>
    </>
  );
};
