import { iComponentSimple } from "../../Interfaces/";
import React from "react";
import { Header } from "../Header";
import { Container } from "./styled";
import { Footer } from "../Footer";

export const Dashboard: React.FC<any> = (props: iComponentSimple) => {
  return (
    <>
      <Header />

      <Container>{props.children}</Container>

      <Footer />
    </>
  );
};
