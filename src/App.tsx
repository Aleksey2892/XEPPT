import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { AnotherPage } from "./pages/AnotherPage";

function App(): React.JSX.Element {
  return (
    <>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/card"} element={<AnotherPage />} />
        <Route path={"/statements"} element={<AnotherPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
