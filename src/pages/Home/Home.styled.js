import styled from "styled-components";

const HomeContainer = styled.main`
  padding: 32px 25px 19px;
  overflow: hidden;
  background-color: #fffdfa;

  @media screen and (min-width: 768px) {
    padding: 32px 35px 19px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 0 0 35px;
    display: flex;
    justify-content: space-between;
  }
`;

export { HomeContainer };
