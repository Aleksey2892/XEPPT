import styled from "styled-components";

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
`;

const TabList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  .list-item {
    &:not(:last-child) {
      margin-right: 24px;
    }

    .static,
    .active {
      color: var(--primary-first-color);
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
    }

    .active {
      padding: 10px 28px;
      border-radius: 30px;
      background-color: #282828;
    }
  }
`;

const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--primary-secondary-color);

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

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const RightSideSettings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .letters {
    margin-right: 10px;
    color: var(--primary-first-color);
  }
`;

export {
  HeaderStyled,
  TabList,
  CircleButton,
  RightSideSettings,
  AccountButton,
};
