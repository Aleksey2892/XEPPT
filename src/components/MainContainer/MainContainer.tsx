import React from "react";
import { Container } from "./MainContainer.styled";

interface IMainContainer {
  children: React.ReactNode;
}

export function MainContainer({ children }: IMainContainer): React.JSX.Element {
  return <Container>{children}</Container>;
}
