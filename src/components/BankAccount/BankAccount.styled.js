import styled from "styled-components";

const AccountCardList = styled.ul`
  li {
    padding: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #e1dcd0;
    border-radius: 8px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .add-new {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const AddTextButton = styled.button`
  position: relative;
  margin-left: 22px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  color: #282828;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 2px;
    left: 0;
    background: #000000;
  }
`;

const AddMoneyBtn = styled.button`
  margin-top: 72px;
  padding: 15px 0;
  width: 100%;
  height: 50px;
  border-radius: 100px;
  color: var(--primary-first-color);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--secondary-color);

  @media screen and (min-width: 768px) {
    margin-top: 11px;
    width: 320px;
  }
`;

export { AccountCardList, ButtonsBox, AddTextButton, AddMoneyBtn };
