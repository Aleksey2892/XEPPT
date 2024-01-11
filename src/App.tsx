import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Home } from "./pages/Home";

function App(): React.JSX.Element {
  return (
    <div>
      <Header>Hello</Header>

      <MainContainer>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
