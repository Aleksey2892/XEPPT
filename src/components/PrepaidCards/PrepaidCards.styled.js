import styled from "styled-components";

const CardsList = styled.ul`
  display: flex;
  animation: slideFromLeft 1s ease-out;

  @media screen and (max-width: 767px) {
    position: relative;
  }
`;

export { CardsList };
