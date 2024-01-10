import React from "react";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Home } from "./pages/Home";

function App(): React.JSX.Element {
  return (
    <div>
      <Header>Hello</Header>

      <MainContainer>
        <Home />
      </MainContainer>
    </div>
  );
}

export default App;
