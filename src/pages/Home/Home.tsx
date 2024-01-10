import React from "react";
import { HomeContainer } from "./Home.styled";
import { Dashboard } from "../../components/Dashboard";

export function Home() {
  return (
    <HomeContainer>
      <Dashboard />
    </HomeContainer>
  );
}
