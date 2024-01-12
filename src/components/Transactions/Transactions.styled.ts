import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonsBox = styled.div`
  margin-bottom: 17px;
  width: 100%;

  .container {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  .static,
  .active {
    padding: 10px 24px;
    border: 1px solid var(--primary-second-color);
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-second-color);
    text-decoration: none;
    transition: all 0.25s;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  .active {
    background-color: var(--primary-second-color);
    color: #fdfdfd;
    transition: all 0.25s;
  }
`;

export { Container, ButtonsBox };
