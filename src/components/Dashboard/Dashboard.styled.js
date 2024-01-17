import styled from "styled-components";
import { AddMoneyBottom } from "../BankAccount/BankAccount.styled";

const LeftSideContainer = styled.div`
  animation: slideFromLeft 1s ease-out;

  @media screen and (max-width: 1023px) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 1024px) {
    flex-shrink: 1;
    padding: 32px 18px 0 0;
    width: 670px;
  }

  @media screen and (min-width: 1920px) {
    padding: 72px 24px 0 0;
  }
`;

const RightSideContainer = styled.div`
  animation: slideFromRight 1s ease-out;

  .svg-container {
    animation: slideFromRight 2.5s ease-out;
  }

  @media screen and (max-width: 1023px) {
    .svg-container {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-shrink: 0;
    width: 316px;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    .svg-container {
      position: absolute;
      bottom: -65px;
      right: -75px;
      width: 300px;
      height: 300px;

      &:before {
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        top: 0;
        left: 10%;
        background-color: #f5cc82;
        animation: lineX 12s ease-in-out infinite;
      }

      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #f5cc82;
        animation: lineY 14s ease-in-out infinite;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    align-items: flex-start;
    width: 743px;
    padding: 72px 32px 16px;

    .svg-container {
      width: 536px;
      height: 536px;
      right: -145px;
      bottom: -45px;
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

  @media screen and (min-width: 1920px) {
    &.laptop {
      width: 360px;
    }
  }
`;

export { LeftSideContainer, RightSideContainer, AddMoneyTop };
