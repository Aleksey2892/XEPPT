import styled from "styled-components";

const AccountCardList = styled.ul`
  animation: slideFromRight 1s ease-out;

  @media screen and (min-width: 1920px) {
    width: 360px;
  }

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
  transition: color 1s;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 2px;
    left: 0;
    background: #000000;
    transition: background 1s;
  }

  &:hover {
    color: var(--primary-first-color);
    transition: all 0.25s;

    &:after {
      background: var(--primary-first-color);
      transition: all 1s;
    }
  }
`;

const AddMoneyBottom = styled.button`
  padding: 15px 0;
  width: 100%;
  height: 50px;
  border-radius: 100px;
  color: var(--primary-first-color);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--secondary-dark);
  transition: all 0.25s;

  &:hover {
    color: var(--secondary-dark);
    background-color: var(--secondary-first-color);
    transition: all 0.25s;
  }

  &.mobile {
    margin-top: 72px;
  }

  @media screen and (min-width: 768px) {
    &.mobile {
      margin-top: 11px;
      width: 320px;
    }
  }

  @media screen and (min-width: 1024px) {
    &.mobile {
      display: none;
    }
  }
`;

export { AccountCardList, ButtonsBox, AddTextButton, AddMoneyBottom };
