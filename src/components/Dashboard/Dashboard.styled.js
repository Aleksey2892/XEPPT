import styled from "styled-components";
import { AddMoneyBottom } from "../BankAccount/BankAccount.styled";

const LeftSideContainer = styled.div`
  @media screen and (max-width: 1023px) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 1024px) {
    padding: 32px 0 54px 0;
  }
`;

const RightSideContainer = styled.div`
  @media screen and (max-width: 1023px) {
    .svg-container {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 316px;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    position: relative;

    .svg-container {
      position: absolute;
      bottom: -70px;
      right: -80px;
      width: 300px;
      height: 300px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const AddMoneyTop = styled(AddMoneyBottom)`
  @media screen and (max-width: 1023px) {
    &.laptop {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 284px;
    font-size: 18px;

    &.laptop {
      margin-bottom: 32px;
    }
  }
`;

export { LeftSideContainer, RightSideContainer, AddMoneyTop };
