import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  height: 100vw;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  text-align: center;

  .title {
    font-size: 25px;
  }

  .url {
    font-weight: bold;
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 40px;
    }
  }
`;

export function AnotherPage() {
  const url = useLocation().pathname.slice(1);

  return (
    <Container>
      <h1 className={"title"}>
        "<span className={"url"}>{url}</span>" page is not completed yet.
      </h1>
    </Container>
  );
}
