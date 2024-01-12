import styled from "styled-components";
import { CircleButton } from "../../index.styled";

const HeaderStyled = styled.header`
  padding: 0 27px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3d3d3d;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    padding: 0 16px;
    height: 96px;

    .button-menu {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .logo-container {
      width: 140px;
      height: 48px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    height: 136px;
    padding: 0 258px;
  }
`;

const TabList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    height: 43px;
    display: flex;
    align-items: center;
  }

  .list-item {
    height: 100%;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 24px;

      @media screen and (min-width: 1920px) {
        margin-right: 48px;
      }
    }

    .static,
    .active {
      color: var(--primary-first-color);
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.25s;

      &:hover {
        color: #fff;
      }

      @media screen and (min-width: 1920px) {
        font-size: 20px;
      }
    }

    .active {
      padding: 10px 28px;
      border-radius: 30px;
      background-color: #282828;
      transition: all 0.25s;

      @media screen and (min-width: 1920px) {
        padding: 16px 32px;
      }
    }
  }
`;

const CircleButtonStyled = styled(CircleButton)`
  color: var(--secondary-dark);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--secondary-first-color);
  transition: all 0.25s;

  &:hover {
    background-color: var(--primary-first-color);
    transition: all 0.25s;
  }

  @media screen and (max-width: 767px) {
    &.circle-name {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    &.notifications {
      margin-right: 16px;
    }
  }
`;

const AccountButton = styled.button`
  padding-left: 16px;
  height: 40px;

  &:hover {
    .user-name {
      color: #fff;
      transition: all 0.25s;
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  .user-name {
    padding-right: 18px;
    font-size: 18px;
    font-weight: 400;
    color: var(--primary-first-color);
    text-transform: uppercase;
    transition: all 0.25s;

    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
`;

const RightSideSettings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .letters {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-first-color);

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export {
  HeaderStyled,
  TabList,
  CircleButtonStyled,
  RightSideSettings,
  AccountButton,
};
