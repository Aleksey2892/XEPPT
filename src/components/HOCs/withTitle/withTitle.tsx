import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 31px;

  &:nth-child(3),
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

type withTitleInnerType = { title: string };

export const withTitle = (WrappedComponent: any) => {
  return ({ title }: withTitleInnerType) => (
    <Container>
      <Title>{title}</Title>

      <WrappedComponent />
    </Container>
  );
};
