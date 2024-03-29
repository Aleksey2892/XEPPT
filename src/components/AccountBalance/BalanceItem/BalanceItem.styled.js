import styled from "styled-components";

const Balance = styled.li`
  padding: 20px 17px;
  width: 183px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid var(--primary-first-color);
  background-color: var(--secondary-second-color);

  .image-container {
    margin-bottom: 15px;
    width: 50px;
    height: 50px;
  }

  .balance {
    font-size: 18px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export { Balance };
