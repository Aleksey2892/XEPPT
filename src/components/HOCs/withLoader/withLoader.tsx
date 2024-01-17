import React from "react";
import { MoonLoader } from "react-spinners";
import styled from "styled-components";

type BaseProps = {
  loading: true | undefined;
  children: React.ReactNode;
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const withLoader = <T extends BaseProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  return (props: T) => {
    const { loading, children } = props;

    if (loading) {
      return (
        <LoaderContainer>
          <MoonLoader color={"var(--primary-second-color)"} />
        </LoaderContainer>
      );
    }

    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };
};
