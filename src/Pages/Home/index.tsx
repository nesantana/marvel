import React from "react";
import { Dashboard } from "../../Components/Dashboard";
import { BoxEvents } from "./BoxEvents";

export const Home: React.FC<any> = () => {
  return (
    <Dashboard>
      Home
      <BoxEvents />
    </Dashboard>
  );
};
