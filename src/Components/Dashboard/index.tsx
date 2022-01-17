import { iComponentSimple } from "@src/Interfaces/";
import React from "react";
import { Header } from "@src/Components/Header";
import { Container } from "./styled";
import { Footer } from "@src/Components/Footer";

export const Dashboard: React.FC<any> = (props: iComponentSimple) => {
  return (
    <>
      <Header />

      <Container>{props.children}</Container>

      <Footer />
    </>
  );
};
