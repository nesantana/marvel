import { iComponentSimple } from "@src/Interfaces/";
import React, { useEffect } from "react";
import { Header } from "@src/Components/Header";
import { Container } from "./styled";
import { Footer } from "@src/Components/Footer";
import { UseMobileContext } from "@src/Contexts/Mobile.context";

export const Dashboard: React.FC<any> = (props: iComponentSimple) => {
  const { setIsMobile } = UseMobileContext();

  const verifyMobile: () => void = () => {
    const { innerWidth: width } = window;

    const resolutionMobile = width <= 900;

    setIsMobile(resolutionMobile);
  };

  useEffect(() => {
    verifyMobile();
    window.addEventListener("resize", verifyMobile);
    return () => window.removeEventListener("resize", verifyMobile);
  }, []);

  return (
    <>
      <Header />

      <Container>{props.children}</Container>

      <Footer />
    </>
  );
};
