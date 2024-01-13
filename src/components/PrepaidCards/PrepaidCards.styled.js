import styled from "styled-components";

const CardList = styled.ul`
  display: flex;
  animation: slideFromLeft 1s ease-out;

  @media screen and (max-width: 767px) {
    position: relative;
  }
`;

export { CardList };
