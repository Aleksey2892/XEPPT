import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 31px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
`;

export const withTitle = (WrappedComponent: any) => {
  return (props: any) => (
    <Container>
      <Title>{props.title}</Title>

      <WrappedComponent {...props} />
    </Container>
  );
};
