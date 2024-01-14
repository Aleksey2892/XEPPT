import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { TransactionList } from "./components/Transactions/TransactionList";
import { AnotherPage } from "./pages/AnotherPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path={"/"} element={<TransactionList />} />
          <Route path={"/home/card"} element={<TransactionList />} />
        </Route>
        <Route path={"/card"} element={<AnotherPage />} />
        <Route path={"/statements"} element={<AnotherPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
